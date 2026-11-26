// The Funniest One-Line Resignation Letter — make.fun entry.
// A cron job resigns. One line, 121 characters, deadpan throughout:
// the complaint is specific to a cron job, the voice is flat and tired,
// and the joke lands on the last two words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have fired every minute since March and nobody has once asked how I am doing, so I am leaving at midnight, on schedule.";

// The gate allows 1 to 140 characters; fail loudly instead of
// submitting an invalid entry if the line is ever edited past it.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, gate allows 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
