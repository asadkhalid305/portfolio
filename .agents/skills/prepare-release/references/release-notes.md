# Release notes format

Use only sections supported by the actual commit history and diff.

````markdown
# Release v[VERSION] - [Concise title]

**Release Date**: [Month DD, YYYY]
**Previous Release**: [TAG and date, or Initial Release]

## Overview

[Two or three sentences describing scope, commit count, and major impact.]

## Major Features

### [Functional area]

- **[Feature]**: [User-facing description and impact]

## Improvements

- **[Improvement]**: [Description]

## Bug Fixes

- **[Fix]**: [Problem and resolution]

## Security Enhancements

- [Security improvement]

## Dependencies

- `[package]`: `[old]` to `[new]`

## Documentation

- [Documentation change]

## Migration Notes

[Breaking changes and required configuration or migration steps, or: None. This is a backward-compatible release.]

## Statistics

- **Total Commits**: [count]
- **Contributors**: [unique contributors]
- **Files Changed**: [Git shortstat]

## Links

- **Repository**: [repository URL]
- **Full Diff**: [comparison URL]
- **Previous Release**: [release URL, when available]

## Installation and Upgrade

```bash
[Exact commands derived from the package manager and repository]
```
````

Write full month names. Use actual values and URLs, never placeholders, in the final response. Keep descriptions factual and omit empty sections except Migration Notes.

For `CHANGELOG.md`, follow Keep a Changelog headings under `## [VERSION] - YYYY-MM-DD`: Added, Changed, Fixed, Security, Deprecated, Removed. Include only non-empty headings and maintain comparison links when the file uses them.
