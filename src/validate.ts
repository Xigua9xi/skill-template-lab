import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";

export interface TemplateInfo {
  name: string;
  description: string;
  entry: "SKILL.md";
  kind: "workflow" | "cli" | "document";
}

export interface TemplateError {
  template: string;
  code: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  templates: TemplateInfo[];
  errors: TemplateError[];
}

const allowedKinds = new Set(["workflow", "cli", "document"]);

export async function validateTemplateDirectory(root: string): Promise<ValidationResult> {
  const entries = await readdir(root, { withFileTypes: true });
  const templates: TemplateInfo[] = [];
  const errors: TemplateError[] = [];

  for (const entry of entries.filter((item) => item.isDirectory())) {
    const dir = join(root, entry.name);
    const metadataPath = join(dir, "skill.json");
    const skillPath = join(dir, "SKILL.md");

    if (!await exists(metadataPath)) {
      errors.push({ template: entry.name, code: "missing-skill-json", message: "Template is missing skill.json." });
      continue;
    }
    if (!await exists(skillPath)) {
      errors.push({ template: entry.name, code: "missing-skill-md", message: "Template is missing SKILL.md." });
      continue;
    }

    const metadata = JSON.parse(await readFile(metadataPath, "utf8")) as Partial<TemplateInfo>;
    const error = validateMetadata(entry.name, metadata);
    if (error) {
      errors.push(error);
    } else {
      templates.push(metadata as TemplateInfo);
    }
  }

  return {
    valid: errors.length === 0,
    templates,
    errors
  };
}

async function exists(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function validateMetadata(template: string, metadata: Partial<TemplateInfo>): TemplateError | undefined {
  if (!metadata.name || !metadata.description || !metadata.entry || !metadata.kind) {
    return { template, code: "invalid-metadata", message: "skill.json must include name, description, entry, and kind." };
  }
  if (metadata.entry !== "SKILL.md") {
    return { template, code: "invalid-entry", message: "entry must be SKILL.md." };
  }
  if (!allowedKinds.has(metadata.kind)) {
    return { template, code: "invalid-kind", message: "kind must be workflow, cli, or document." };
  }
  return undefined;
}
