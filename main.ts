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
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "🧭", "utf8");
