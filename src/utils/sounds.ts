let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function percussive(freq: number, durationSec: number, vol: number) {
  const c = getCtx();
  const now = c.currentTime;

  // Short noise burst shaped with an exponential decay envelope
  const bufLen = Math.ceil(c.sampleRate * durationSec);
  const buf = c.createBuffer(1, bufLen, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp((-i / bufLen) * 18);
  }

  const src = c.createBufferSource();
  src.buffer = buf;

  const filter = c.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = freq;
  filter.Q.value = 0.8;

  const gain = c.createGain();
  gain.gain.setValueAtTime(vol, now);

  src.connect(filter);
  filter.connect(gain);
  gain.connect(c.destination);
  src.start(now);
}

function chime(freq: number, durationSec: number, vol: number, delay = 0) {
  const c = getCtx();
  const now = c.currentTime + delay;

  const osc = c.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(vol, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

  osc.connect(gain);
  gain.connect(c.destination);
  osc.start(now);
  osc.stop(now + durationSec + 0.02);
}

export function playMove() {
  percussive(1000, 0.09, 0.45);
}

export function playCapture() {
  percussive(700, 0.13, 0.6);
}

export function playWrong() {
  chime(220, 0.25, 0.12);
}

export function playComplete() {
  chime(660, 0.3, 0.1);
  chime(880, 0.3, 0.1, 0.12);
  chime(1100, 0.4, 0.08, 0.24);
}
