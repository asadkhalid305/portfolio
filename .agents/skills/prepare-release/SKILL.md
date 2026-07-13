---
name: prepare-release
description: Prepare a semantic release for this portfolio by analyzing changes, choosing a version, updating package metadata and CHANGELOG.md, generating release notes, and providing exact release commands. Use when the user asks to prepare, plan, or cut a release from develop or the current branch.
---

# Prepare a release

1. Inspect `package.json`, the detected package-manager lockfile, `CHANGELOG.md`, Git status, branches, tags, remote, and commits since the latest tag. Do not discard or include unrelated working-tree changes.
2. Ask for `patch`, `minor`, `major`, or an explicit semantic version if the user did not provide one. Validate that it is greater than the current version and does not already have a Git tag.
3. Use `develop` as the source when it exists; otherwise use the current branch. Identify the real target branch from repository state, defaulting to `main` when present.
4. Categorize actual commits as Added, Changed, Fixed, Security, Dependencies, Documentation, or Other. Read relevant diffs when commit subjects do not explain user impact.
5. Draft release notes using [release-notes.md](references/release-notes.md). Omit empty sections and state explicitly when migration notes are unnecessary.
6. Before editing, show the proposed version and changelog summary. After approval, update the version in `package.json` and its lockfile using the package manager, add the dated changelog entry, and update only explicit version references elsewhere.
7. Run the focused tests and `npm run build`. Report failures without publishing.
8. Provide exact commands and repository URLs for the approved release route. Do not commit, push, tag, merge, create a pull request, publish a release, or change branches without explicit authorization for those actions.

Summarize the version change, files updated, verification, source and target branches, and remaining release actions.
