// Worst Fix Ever: Funniest Commit Message — make.fun
// One commit message, at most 100 characters, for the bug fix that made
// everything worse. The irony is specific: the fix removed login entirely,
// so failed logins stopped — along with every login.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "fix(auth): removed login entirely to stop failed logins";

if (line.length < 1 || line.length > 100) {
  throw new Error(`Line must be 1-100 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
