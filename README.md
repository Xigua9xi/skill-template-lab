# skill-template-lab

English | [简体中文](README.zh-CN.md)

`skill-template-lab` is a small template set and validator for building repeatable skill and agent workflows.

It is intended as a starting point for teams that want reusable, scoped skills instead of one-off prompts. The bundled templates are intentionally small, but they include enough structure to describe scope, inputs, workflow, verification, and safety boundaries.

## What This Includes

- Three bundled skill templates.
- A metadata format for templates.
- A JSON Schema for template metadata.
- A validator CLI that checks bundled templates.
- Tests that ensure valid templates pass and broken templates fail.

## Templates

| Template | Use case |
| --- | --- |
| `minimal-skill` | One narrow repeatable workflow. |
| `cli-tool-skill` | A workflow that wraps a command line tool. |
| `doc-review-skill` | A document review or transformation workflow. |

## Quickstart

```powershell
npm.cmd install
npm.cmd test
npm.cmd run lint
npm.cmd run demo
```

## CLI Usage

Build first:

```powershell
npm.cmd run build
```

Validate templates:

```powershell
node dist/cli.js templates
```

## Directory Guide

```text
templates/
```

Reusable skill templates. Each template has `SKILL.md` and `skill.json`.

```text
schema/
```

JSON Schema for `skill.json` metadata.

```text
src/
```

Template validation logic and CLI entrypoint.

```text
test/
```

Tests for valid bundled templates and invalid metadata cases.

```text
scripts/
```

Local lint checks.

## Template Contract

Each template should include:

- `SKILL.md`: human-readable workflow instructions.
- `skill.json`: metadata with `name`, `description`, `entry`, and `kind`.

Good templates should define:

- When to use the skill.
- Accepted inputs.
- Workflow steps.
- Verification or success criteria.
- Safety boundaries and things the skill should not do.

## How To Extend

Good extension points:

- Add a template generator command.
- Wire the JSON Schema into validation.
- Add an agent framework adapter template.
- Add authoring guidelines and examples.

See `.github/ISSUE_DRAFTS.md` for ready-to-copy issue drafts.

## Publishing Notes

Before publishing:

- Run `npm.cmd test`.
- Run `npm.cmd run lint`.
- Do not commit `node_modules/` or `dist/`.
- Keep template examples generic unless they are intentionally domain-specific and sanitized.
