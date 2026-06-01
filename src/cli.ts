#!/usr/bin/env node
import { validateTemplateDirectory } from "./validate.js";

const target = process.argv[2] ?? "templates";
const result = await validateTemplateDirectory(target);

for (const template of result.templates) {
  console.log(`PASS ${template.name}: ${template.description}`);
}
for (const error of result.errors) {
  console.log(`FAIL ${error.template}: ${error.message}`);
}

console.log(`Summary: ${result.templates.length} valid, ${result.errors.length} error(s)`);
process.exitCode = result.valid ? 0 : 1;
