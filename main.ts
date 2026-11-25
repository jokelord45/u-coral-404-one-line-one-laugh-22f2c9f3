// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// Writes a single funny line to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge staged an intervention: it locked the ice cream and left a Post-it saying, 'We need to talk about us.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
