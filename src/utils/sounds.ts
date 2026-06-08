// All sound synthesis happens here via the Web Audio API. No audio files needed —
// we generate everything programmatically. Two types of sounds:
//   percussive — shaped noise burst, used for move clicks
//   chime      — sine wave with a fade, used for wrong-move buzz and completion

// Single AudioContext shared across all sounds. Browsers require a user gesture
// before audio can play — the resume() call handles the "suspended" state that
// happens when the context is first created before any interaction.
//
// Web Audio is feature-detected: older iOS Safari only exposes webkitAudioContext,
// and some environments (private mode, locked-down WebView) expose neither or throw
// on construction. getCtx() returns null in those cases and every sound becomes a
// no-op — a missing click must never crash the whole app.
let ctx: AudioContext | null = null;
let audioUnavailable = false;

function getCtx(): AudioContext | null {
  if (audioUnavailable) return null;
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!Ctor) {
    audioUnavailable = true;
    return null;
  }
  try {
    if (!ctx) ctx = new Ctor();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    audioUnavailable = true;
    return null;
  }
}

// Makes a clicky thud sound. Fills a buffer with white noise, then shapes it
// with a steep exponential decay so it goes from loud to silent fast, and runs
// it through a bandpass filter to give it a pitched "character" (higher freq = brighter).
function percussive(freq: number, durationSec: number, vol: number) {
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;

  // exponential decay: loud at start, nearly silent by the end of the buffer
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

// Pure sine wave tone that fades in quickly then decays. Multiple chime calls
// with different delays stack up to make the completion "ding ding ding" sound.
function chime(freq: number, durationSec: number, vol: number, delay = 0) {
  const c = getCtx();
  if (!c) return;
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
