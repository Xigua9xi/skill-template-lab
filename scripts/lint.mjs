import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

let failures = 0;

async function walk(dir) {
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(ts|mjs|md|json)$/.test(entry.name)) {
      const text = await readFile(fullPath, "utf8");
      if (text.includes("TODO")) {
        console.error(`${fullPath}: remove TODO before publishing`);
        failures += 1;
      }
    }
  }
}

for (const root of ["src", "test", "templates", "schema"]) {
  await walk(root);
}

process.exitCode = failures === 0 ? 0 : 1;
