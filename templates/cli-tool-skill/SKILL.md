# CLI Tool Skill

Use this template when the workflow wraps a command line tool and needs repeatable command execution.

## When to use

- The task depends on a specific CLI.
- The workflow should capture command inputs, outputs, and exit codes.
- Users need consistent command patterns instead of ad hoc shell usage.

## Inputs

Define the required inputs here:

- Tool name and expected version.
- Working directory.
- Input files or arguments.
- Output path, if any.

## Workflow

1. Check whether the tool is available.
2. Confirm the working directory and input arguments.
3. Run the command with explicit arguments.
4. Capture exit code, stdout, and stderr.
5. Verify the expected output or side effect.
6. Report the result and include the command that was run.

## Verification

Use at least one objective check:

- Expected file exists.
- Exit code is zero.
- Output contains a required marker.
- A follow-up validation command passes.

## Safety boundaries

- Avoid destructive commands by default.
- Do not run commands that require secrets unless the user has provided them intentionally.
- Do not hide non-zero exit codes.
- Do not claim success without reading command output.
