import test from "node:test";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { validateTemplateDirectory } from "../dist/validate.js";

test("validates bundled templates", async () => {
  const result = await validateTemplateDirectory("templates");

  assert.equal(result.valid, true);
  assert.equal(result.templates.length, 3);
  assert.deepEqual(result.errors, []);
});

test("reports missing required template metadata", async () => {
  const root = join(tmpdir(), `skill-template-lab-${Date.now()}`);
  await mkdir(join(root, "broken"), { recursive: true });
  await writeFile(join(root, "broken", "SKILL.md"), "# Broken");

  const result = await validateTemplateDirectory(root);

  assert.equal(result.valid, false);
  assert.equal(result.errors[0].code, "missing-skill-json");
});
