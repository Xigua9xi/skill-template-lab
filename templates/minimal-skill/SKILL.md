# Minimal Skill

Use this template when a task has one narrow, repeatable workflow and does not need a large framework.

## When to use

- The workflow can be explained in a few steps.
- The expected input is easy to describe.
- Success can be verified with a clear check.
- The skill should avoid broad domain assumptions.

## Inputs

Define the accepted inputs here, such as:

- A file path.
- A short text prompt.
- A URL.
- A structured object or config file.

## Workflow

1. Confirm the input is sufficient.
2. Run the smallest useful action.
3. Verify the output against the success criteria.
4. Report the result, including any limitations.

## Verification

State the command, check, or manual condition that proves the task succeeded.

Examples:

- A generated file exists.
- A validation command exits successfully.
- A summary includes all required sections.

## Safety boundaries

- Do not invent missing source material.
- Do not modify files unless the workflow explicitly requires it.
- Do not expand scope beyond the stated task.
