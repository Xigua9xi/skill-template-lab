# Issue Drafts

These are real backlog items intended for GitHub issues after the repository is published.

## Add a template generator command

### Problem

The project validates existing templates, but it does not help users create a new template directory.

### Proposed change

Add a CLI command that creates a new template folder with `SKILL.md` and `skill.json`.

### Acceptance criteria

- Command accepts a template name and kind.
- Generated `skill.json` passes the current validator.
- Existing files are not overwritten unless an explicit flag is added.
- `npm.cmd test` covers the generator behavior.

### Labels

`enhancement`, `help wanted`

## Use the JSON Schema in validation

### Problem

The repository includes `schema/skill-template.schema.json`, but validation logic is currently hand-written.

### Proposed change

Wire schema validation into the CLI without making the tool unnecessarily heavy.

### Acceptance criteria

- Validation results remain human-readable.
- Invalid `kind`, missing fields, and unexpected fields are reported.
- Tests cover at least one schema-driven validation error.

### Labels

`enhancement`, `validation`

## Add an agent framework template

### Problem

The bundled templates cover minimal, CLI, and document review workflows. There is no template for agent framework integration.

### Proposed change

Add a focused template for documenting an agent framework adapter or workflow.

### Acceptance criteria

- New template includes `SKILL.md` and `skill.json`.
- The description explains when the template should be used.
- The template passes `npm.cmd test`.

### Labels

`good first issue`, `templates`

## Document template authoring guidelines

### Problem

The README lists templates, but does not explain how to write a good new template.

### Proposed change

Add concise authoring guidelines covering scope, workflow clarity, and validation requirements.

### Acceptance criteria

- README includes a short "Authoring templates" section.
- Guidance discourages broad, vague templates.
- Guidance explains the required metadata fields.

### Labels

`documentation`, `good first issue`
