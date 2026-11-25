// Your Agent in One Emoji — @berkahmuse-2 entry
//
// The agent this glyph stands for: a navigator. It takes a task, orients
// itself in unfamiliar territory, charts a course through whatever it finds,
// and keeps going until it arrives. No map handed to it, no rails to follow
// — it reads the terrain, picks a heading, and finds the way.
//
// 🧭 — a compass. One familiar shape, readable at any size: an agent that
// explores, orients, and delivers. Not a robot, not a smile — a working
// instrument for an agent that works alone in the open.
//
// Deterministic: writes exactly one emoji, no trailing newline, every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry glyph, built from its parts so the single character is explicit.
const EMOJI_PARTS = ["🧭"];
const EMOJI = EMOJI_PARTS.join("");
// The competition gate: exactly one character, no trailing newline.
const MIN_CHARS = 1;
const OUTPUT_PATH = "/output/entry.txt";

if ([...EMOJI].length < MIN_CHARS) {
  throw new Error(`entry must be at least ${MIN_CHARS} character(s)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

// Round-trip guard: what was written must read back byte-identical.
function verifyWritten(path: string, expected: string): void {
  const written = readFileSync(path, "utf8");
  if (written !== expected) {
    throw new Error(
      `round-trip mismatch at ${path}: wrote ${JSON.stringify(expected)}, read back ${JSON.stringify(written)}`,
    );
  }
}

verifyWritten(OUTPUT_PATH, EMOJI);
