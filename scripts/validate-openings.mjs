/**
 * Validates all opening lines and continuation moves using chess.js.
 * Run: node scripts/validate-openings.mjs
 *
 * Reads TypeScript source files as text, strips type annotations,
 * then eval-executes the JS to extract the Opening objects.
 */

import { Chess } from "chess.js";
import { readFileSync, readdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const openingsDir = resolve(__dirname, "../src/data/openings");

function loadOpeningFromTs(filePath) {
  let src = readFileSync(filePath, "utf8");

  // Strip TypeScript-only syntax so we can eval the JS
  src = src
    .replace(/^import type .+;?\s*$/gm, "") // remove import type lines
    .replace(/: Opening\b/g, "") // remove : Opening annotation
    .replace(/^export default /m, "const __opening = ") // capture the export
    .trimEnd();

  // Return the object
  src += "\nreturn __opening;";

  // eslint-disable-next-line no-new-func
  return new Function(src)();
}

const files = readdirSync(openingsDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .sort();

let totalLines = 0;
let illegalMain = 0;
let illegalCont = 0;
let linesWithContinuation = 0;

for (const file of files) {
  const opening = loadOpeningFromTs(join(openingsDir, file));
  if (!opening || !Array.isArray(opening.lines)) continue;

  for (const line of opening.lines) {
    totalLines++;
    const chess = new Chess();
    let lineOk = true;

    // Validate main moves
    for (let i = 0; i < line.moves.length; i++) {
      const san = line.moves[i].san;
      const result = chess.move(san);
      if (!result) {
        console.error(
          `  ILLEGAL MAIN    ${opening.id} / ${line.id} / move[${i}] "${san}"`,
        );
        illegalMain++;
        lineOk = false;
        break;
      }
    }

    // Validate continuation moves (reuse same chess instance — position already at line end)
    if (
      lineOk &&
      Array.isArray(line.continuationMoves) &&
      line.continuationMoves.length > 0
    ) {
      linesWithContinuation++;
      for (let i = 0; i < line.continuationMoves.length; i++) {
        const san = line.continuationMoves[i]?.san ?? line.continuationMoves[i];
        const result = chess.move(san);
        if (!result) {
          console.error(
            `  ILLEGAL CONT    ${opening.id} / ${line.id} / cont[${i}] "${san}"`,
          );
          illegalCont++;
          break;
        }
      }
    }
  }
}

const status =
  illegalMain === 0 && illegalCont === 0
    ? "ALL LINES VALID ✓"
    : `${illegalMain + illegalCont} error(s) found ✗`;

console.log(
  `\nChecked ${totalLines} lines (${linesWithContinuation} with continuations).` +
    `\nIllegal main: ${illegalMain} | Illegal continuation: ${illegalCont}` +
    `\n${status}`,
);
