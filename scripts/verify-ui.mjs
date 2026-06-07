/**
 * Playwright visual verification — Button hover contrast + modal mobile layout
 * Run: node scripts/verify-ui.mjs
 */

import { firefox } from "playwright";
import { mkdirSync } from "fs";

const BASE = "http://localhost:5173";
const LEARN = BASE + "/#/learn/italian/giuoco-pianissimo";
const OPENING = BASE + "/#/opening/italian";
const OUT = "scripts/verify-screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await firefox.launch({ headless: true });

async function shot(page, name) {
  await page.screenshot({ path: OUT + "/" + name + ".png", fullPage: false });
  console.log("  📸 " + name + ".png");
}

async function setTheme(page, theme) {
  await page.evaluate((t) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }, theme);
  await page.waitForTimeout(300);
}

// ── Desktop ───────────────────────────────────────────────────────────────────
const pg = await browser.newPage();
await pg.setViewportSize({ width: 1280, height: 800 });

// 1. Learn page dark
console.log("1. Learn page dark");
await pg.goto(LEARN, { waitUntil: "networkidle" });
await setTheme(pg, "dark");
await shot(pg, "01-learn-dark");

// 2. Learn page light — secondary buttons visible (Back, Hint in LearnControls)
console.log("2. Learn page light");
await setTheme(pg, "light");
await shot(pg, "02-learn-light");

// 3. Hover a secondary button in light mode
console.log("3. Secondary button hover light");
const secondaryBtns = pg.locator("button");
const count = await secondaryBtns.count();
console.log("   Found " + count + " buttons");
if (count > 0) {
  await secondaryBtns.nth(0).hover();
  await shot(pg, "03-btn0-hover-light");
}
if (count > 1) {
  await secondaryBtns.nth(1).hover();
  await shot(pg, "03-btn1-hover-light");
}

// 4. Secondary button hover dark (comparison)
console.log("4. Secondary button hover dark");
await setTheme(pg, "dark");
if (count > 0) {
  await secondaryBtns.nth(0).hover();
  await shot(pg, "04-btn0-hover-dark");
}

// ── Mobile ────────────────────────────────────────────────────────────────────
await pg.setViewportSize({ width: 375, height: 812 });
await setTheme(pg, "light");
await pg.goto(LEARN, { waitUntil: "networkidle" });
await setTheme(pg, "light");

// 5. Learn page mobile light
console.log("5. Learn mobile light");
await shot(pg, "05-learn-mobile-light");

// 6. Inject LineCompleteModal — mobile light
console.log("6. LineCompleteModal mobile light");
await pg.evaluate(() => {
  const el = document.createElement("div");
  el.id = "__m";
  el.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:12px";
  el.innerHTML =
    '<div style="background:var(--bg-elevated);border:1px solid var(--success);border-radius:1rem;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;padding:20px">' +
    '<p style="color:var(--success);font-weight:700;font-size:1.25rem;text-align:center;margin-bottom:4px">Line complete!</p>' +
    '<p style="color:var(--text-secondary);font-size:.875rem;text-align:center;margin-bottom:16px">You know this line. Ready to test yourself?</p>' +
    '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
    '<button id="__bi" style="border:1px solid var(--border);color:var(--text-primary);padding:6px 12px;border-radius:4px;background:transparent;font-size:.875rem;cursor:pointer">See the idea →</button>' +
    '<button id="__ba" style="border:1px solid var(--border);color:var(--text-primary);padding:6px 12px;border-radius:4px;background:transparent;font-size:.875rem;cursor:pointer">↺ Go again</button>' +
    '<button style="background:var(--accent-amber);color:#111;font-weight:600;padding:6px 12px;border-radius:4px;font-size:.875rem;border:none;cursor:pointer">Practice this line →</button>' +
    "</div></div>";
  document.body.appendChild(el);
});
await shot(pg, "06-modal-mobile-light");

// 7. Hover "See the idea" — light (critical contrast test)
console.log("7. Hover See the idea light");
await pg.locator("#__bi").hover();
await shot(pg, "07-see-idea-hover-light");

// 8. Hover "Go again" — light
console.log("8. Hover Go again light");
await pg.locator("#__ba").hover();
await shot(pg, "08-go-again-hover-light");

// 9 & 10. Same in dark mode
console.log("9. Modal dark mobile");
await pg.evaluate(
  () =>
    document.getElementById("__m") && document.getElementById("__m").remove(),
);
await setTheme(pg, "dark");
await pg.evaluate(() => {
  const el = document.createElement("div");
  el.id = "__md";
  el.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:12px";
  el.innerHTML =
    '<div style="background:var(--bg-elevated);border:1px solid var(--success);border-radius:1rem;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;padding:20px">' +
    '<p style="color:var(--success);font-weight:700;font-size:1.25rem;text-align:center;margin-bottom:4px">Line complete!</p>' +
    '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:16px">' +
    '<button id="__bid" style="border:1px solid var(--border);color:var(--text-primary);padding:6px 12px;border-radius:4px;background:transparent;font-size:.875rem;cursor:pointer">See the idea →</button>' +
    '<button style="border:1px solid var(--border);color:var(--text-primary);padding:6px 12px;border-radius:4px;background:transparent;font-size:.875rem;cursor:pointer">↺ Go again</button>' +
    '<button style="background:var(--accent-amber);color:#111;font-weight:600;padding:6px 12px;border-radius:4px;font-size:.875rem;border:none;cursor:pointer">Practice this line →</button>' +
    "</div></div>";
  document.body.appendChild(el);
});
await shot(pg, "09-modal-dark-mobile");
await pg.locator("#__bid").hover();
await shot(pg, "10-see-idea-hover-dark");

// 11. WrongMoveOverlay — mobile light
console.log("11. WrongMoveOverlay mobile light");
await pg.evaluate(
  () =>
    document.getElementById("__md") && document.getElementById("__md").remove(),
);
await setTheme(pg, "light");
await pg.evaluate(() => {
  const el = document.createElement("div");
  el.id = "__w";
  el.style.cssText =
    "position:fixed;bottom:24px;right:24px;z-index:9999;width:calc(100vw - 48px);max-width:360px;background:var(--danger-bg);border:1px solid var(--danger);border-radius:.75rem;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,.4)";
  el.innerHTML =
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px">' +
    '<div style="flex:1"><p style="font-weight:600;font-size:.875rem;color:var(--danger);margin-bottom:4px">Not the right move</p>' +
    '<p style="font-size:.875rem;color:var(--text-secondary)">You played <b style="color:var(--text-primary)">e5</b> — the line continues <b style="color:var(--accent-amber)">d4</b></p></div>' +
    '<button style="flex-shrink:0;background:var(--danger);color:#fff;padding:8px 16px;border-radius:.5rem;font-size:.875rem;font-weight:600;border:none;cursor:pointer">Got it</button>' +
    "</div>";
  document.body.appendChild(el);
});
await shot(pg, "11-wrong-overlay-light-mobile");

// 12. Opening page desktop light — border colours
console.log("12. Opening page desktop light");
await pg.evaluate(
  () =>
    document.getElementById("__w") && document.getElementById("__w").remove(),
);
await pg.setViewportSize({ width: 1280, height: 800 });
await pg.goto(OPENING, { waitUntil: "networkidle" });
await setTheme(pg, "light");
await shot(pg, "12-opening-desktop-light");

await browser.close();
console.log("\n✅ All screenshots in " + OUT + "/");
