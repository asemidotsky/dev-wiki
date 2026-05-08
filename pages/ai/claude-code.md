# Claude

## Claude instructions file

1. `CLAUDE.md` in project folder - project specific for all engineers, committed. Generated with `/init`
1. `CLAUDE.local.md` personal, not committed, not shared
1. `~/.claude/CLAUDE.md` global on your machine, all projects

## Great instructions

- `# Use comments sparingly. Only comment complex code.`
- File mentions with `@` to add context (reduce context) when asking something, e.g. `How does the auth system works ? @auth...`
- Referencing Files in CLAUDE.md

    ```bash
    The database schema is defined in the @prisma/schema.prisma file. Reference it anytime you need to understand the structure of data stored in the database.
    ```

## Commands

- `/init`
- `compact` - take all messages in current conversation and summarize them. Help Claude to stay focused but remember what it has learned in session.
- `clear` - clear conversation history and free up context

## Shortcuts

- `#` - add memory
- `Ctrl+V` - paste text/screenshoot
- `Shift+Tab` `Shift+Tab` - Plan mode
- `Esc` - interrupting Claude, allowing you to redirect or correct it.
- `Esc`+`Esc` - remove context not relevant to the current task. Rewind the conversation to an earlier point in time.

## Plan and Thinking mode

**Plan mode** is for complex tasks.

- Wide understaning of code base required
- Task requires several steps to complete

**Thinking modes**: Think -> Think more -> Think a lot -> Think longer -> Ultrathink

- Focusing on a particulary tricky bit of logic
- Troubleshooting a difficult bug

## Controlling context

- Interrapting with `Esc`
- Rewind the conversation to an earlier point in time - `Double tap Esc`
- Compact
- Clear

## Custom commands

- create `.claude` directory
- create `commands` dir
- add command file, e.g. `audit.md` - will be `/audit` command

```md
Your goal is to update any vulnerable dependencies.

Do the following:
1. Runs npm audit to find vulnerable installed packages
2. Runs npm audit fix to apply updates
3. Runs tests to verify the updates didn't break anything
```

### Commands with Arguments

For example, a `write_tests.md`:

```md
Write comprehensive tests for: $ARGUMENTS

Testing conventions:
* Use Vitests with React Testing Library
* Place test files in a __tests__ directory in the same folder as the source file
* Name test files as [filename].test.ts(x)
* Use @/ prefix for imports

Coverage:
* Test happy paths
* Test edge cases
* Test error states
```

You can then run this command with a file path:

`/write_tests the use-auth.ts file in the hooks directory`

The arguments don't have to be file paths - they can be any string you want to pass to give Claude context and direction for the task.

### Key Benefits

- Automation - Turn repetitive workflows into single commands
- Consistency - Ensure the same steps are followed every time
- Context - Provide Claude with specific instructions and conventions for your project
- Flexibility - Use arguments to make commands work with different inputs

Custom commands are particularly useful for project-specific workflows like running test suites, deploying code, or generating boilerplate following your team's conventions.

## MCP servers

- `npx @playwright/mcp@latest`

## Hooks

Hooks allow you to run commands before or after Claude attempts to run a tool. They're incredibly useful for implementing automated workflows like running code formatters after file edits, executing tests when files change, or blocking access to specific files.

There are two types of hooks:

- **PreToolUse hooks** - Run before a tool is called
- **PostToolUse hooks** - Run after a tool is called

Hooks are defined in Claude settings files