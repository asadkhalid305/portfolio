---
description: Automate release preparation: generate release notes, bump version, update CHANGELOG.md, and provide release steps
---

# Release Preparation Workflow

You are preparing a release from the develop branch to main.

## Inputs:

- Version type: ${input:versionType:Enter version type (patch/minor/major) or
  specific version (e.g., 1.3.0)}

## Pre-flight Checks

1. Read `package.json` to get project name, current version, and repository URL
2. Extract repository info from package.json `repository` field OR from git
   remote:
   - Run `git remote get-url origin` to get repo URL
   - Parse owner and repo name from URL (e.g., github.com/owner/repo)
3. Check if CHANGELOG.md exists, if not, note to create it

## Instructions

### Step 1: Determine Version Number

1. Read the current version from `package.json`
2. If user provided specific version (e.g., "1.3.0"), use it
3. Otherwise, calculate new version based on type:
   - **patch**: increment third number (1.2.0 → 1.2.1)
   - **minor**: increment second number (1.2.0 → 1.3.0)
   - **major**: increment first number (1.2.0 → 2.0.0)

### Step 2: Analyze Git History

1. Run `git describe --tags --abbrev=0` to find last release tag (if no tags
   exist, use initial commit hash)
2. Run
   `git log [LAST_TAG]..develop --pretty=format:"%h - %s (%an, %ar)" --no-merges`
   to get commits
3. If develop branch doesn't exist, use current branch
4. Categorize commits by conventional commit prefixes:
   - **Added**: `feat:` commits (new features, pages, integrations)
   - **Changed**: `refactor:`, `style:`, UI/UX improvements, `perf:` commits
   - **Fixed**: `fix:` commits
   - **Security**: `security:` or security-related changes
   - **Dependencies**: `build(deps):`, `chore(deps):` commits
   - **Documentation**: `docs:` commits
   - **Other**: Any commits not matching above patterns

### Step 3: Generate Release Notes

Create comprehensive release notes following this exact format. Use actual
project name from package.json in the title if available:

````markdown
# Release v[VERSION] - [Title]

**Release Date**: [Month DD, YYYY]\
**Previous Release**: [Last Tag] ([Month DD, YYYY]) OR "Initial Release" if
first release

---

## 🎯 Overview

[2-3 sentence summary of release scope, commit count, and major highlights]

---

## ✨ Major Features

### [Feature Category 1]

- **[Feature Name]** - [Detailed description of feature and its impact]
- **[Feature Name]** - [Detailed description]

### [Feature Category 2]

- **[Feature Name]** - [Detailed description]

[Continue for all major features grouped by functional area] [If no major
features, omit this section entirely]

---

## 🔧 Improvements

### User Interface & Experience

- **[Improvement]** - [Description]
- [Other UI/UX improvements]

### Performance & Quality

- [Performance improvements]
- [Code quality improvements]

### Developer Experience

- [DX improvements]
- [Tooling improvements]

[Only include subsections that have actual content]

---

## 🐛 Bug Fixes

- [Detailed description of bug and fix]
- [Other fixes with context]

[If no bug fixes, omit this section]

---

## 🔒 Security Enhancements

- [Security improvements with specifics]
- [Enhanced policies or access controls]

[If no security changes, omit this section]

---

## 📦 Dependencies

### Updated

- `package-name`: old-version → new-version
- [Other updates]

### Added

- [New dependencies if any]

### Removed

- [Removed dependencies if any]

[If no dependency changes, omit this section]

---

## 📝 Documentation

- [Documentation updates]
- [New guides or references]

[If no documentation changes, omit this section]

---

## 🔄 Migration Notes

### Breaking Changes

[List breaking changes OR state "None - This is a backward-compatible release."]

### Configuration Changes

- [Environment variable changes]
- [Config file updates]

### Database Changes

- [Schema changes]
- [New tables/columns]
- [Migration requirements]

[If no breaking changes, config changes, or database changes, state: "None -
This is a backward-compatible release."]

---

## 📊 Statistics

- **Total Commits**: [COUNT]
- **Contributors**: [List unique contributors from git log]
- **Files Changed**: [Run: git diff --shortstat [LAST_TAG]..develop]

---

## 🔗 Links

- **Repository**: [REPO_URL from package.json or git remote]
- **Full Diff**: [REPO_URL]/compare/[LAST_TAG]...v[VERSION]
- **Previous Release**: [REPO_URL]/releases/tag/[LAST_TAG] (if exists)

---

## 📌 Installation & Upgrade

```bash
# Pull latest changes

git checkout main
git pull origin main

# Install dependencies

npm install # or yarn install / pnpm install based on lock file

# Run database migrations (if applicable)

# [Add specific migration commands if project has them]

# Start development server

npm run dev # or yarn dev / pnpm dev

# Build for production

npm run build # or yarn build / pnpm build
```

[Adjust commands based on package.json scripts]
````

**Important Formatting Rules:**

- Use full month names (e.g., "December 24, 2025" not "2025-12-24")
- Include horizontal rules (---) between major sections
- **Omit entire sections if they have no content** (e.g., if no bug fixes,
  remove Bug Fixes section)
- Group features by functional area with bold feature names
- Be detailed and descriptive, not just bullet points
- Include commit count and file statistics
- Always include Migration Notes section (even if stating "backward-compatible")
- Use actual repository URLs from package.json or git remote
- Adjust installation commands based on package manager (check for yarn.lock,
  pnpm-lock.yaml, package-lock.json)

Display this in chat as a code block.

### Step 4: Update Files

#### A. Update package.json

Use `replace_string_in_file` to change version from old to new version.

#### B. Update or Create CHANGELOG.md

1. Check if CHANGELOG.md exists
2. If not, create it with standard Keep a Changelog format header
3. If exists, read current content
4. Add new version section after `## [Unreleased]` heading (or at the top if no
   unreleased section)
5. Include all categorized changes following Keep a Changelog format:

   ```markdown
   ## [VERSION] - YYYY-MM-DD

   ### Added

   - New features

   ### Changed

   - Changes to existing functionality

   ### Fixed

   - Bug fixes

   ### Security

   - Security improvements
   ```

6. Update version comparison links at bottom of file (if they exist)
7. Use `replace_string_in_file` or `create_file` appropriately

#### C. Check for Version References

Search workspace for hardcoded version strings in:

- README.md (version badges, installation instructions)
- Documentation files in docs/ folder
- Any config files with version numbers
- Only update if they explicitly reference the package version

### Step 5: Provide Release Commands

Display in chat with dynamic values from package.json and git:

```
✅ VERSION: [OLD] → [NEW]

📋 RELEASE NOTES
[Generated release notes above]

📝 FILES UPDATED
✓ package.json: v[OLD] → v[NEW]
✓ CHANGELOG.md: Added v[NEW] section [or "Created CHANGELOG.md"]
[List any other updated files]

💾 COMMIT & PUSH

git add package.json CHANGELOG.md [other-files]
git commit -m "chore: prepare release v[NEW_VERSION]"
git push origin [CURRENT_BRANCH]

🚀 RELEASE PROCESS

Option A: Using GitHub Releases (Recommended)
─────────────────────────────────────────────

1️⃣ CREATE TAG & RELEASE

   Via Command Line:
   git tag -a v[NEW_VERSION] -m "Release v[NEW_VERSION]"
   git push origin v[NEW_VERSION]

   Then create release on GitHub:
   URL: [REPO_URL]/releases/new?tag=v[NEW_VERSION]

   Settings:
   • Tag: v[NEW_VERSION] (already created)
   • Target: [TARGET_BRANCH - usually develop or main]
   • Title: v[NEW_VERSION] - [Brief Title]
   • Description: [Copy release notes from above]
   • ✅ Set as latest release
   • Publish Release

2️⃣ CREATE PR: [SOURCE_BRANCH] → main

   URL: [REPO_URL]/compare/main...[SOURCE_BRANCH]

   Settings:
   • Title: Release v[NEW_VERSION]
   • Description: Link to release: [REPO_URL]/releases/tag/v[NEW_VERSION]
   • Labels: release
   • Merge when ready (squash/merge/rebase based on repo settings)

3️⃣ SYNC BRANCHES (After PR merged)

   git checkout main
   git pull origin main
   git checkout [SOURCE_BRANCH]
   git merge main
   git push origin [SOURCE_BRANCH]

Option B: Direct Merge (For projects without PR workflow)
──────────────────────────────────────────────────────────

1️⃣ MERGE TO MAIN

   git checkout main
   git merge [SOURCE_BRANCH] --no-ff -m "Release v[NEW_VERSION]"
   git push origin main

2️⃣ CREATE TAG

   git tag -a v[NEW_VERSION] -m "Release v[NEW_VERSION]"
   git push origin v[NEW_VERSION]

3️⃣ CREATE GITHUB RELEASE

   URL: [REPO_URL]/releases/new?tag=v[NEW_VERSION]
   [Follow settings from Option A]

✅ DONE!

Next Steps:
• Monitor deployment (if auto-deploy is configured)
• Announce release in relevant channels
• Update documentation site (if separate)
• Close related issues/milestones
```

## Output Rules

- Be concise and actionable
- Show exact commands with NO placeholders in final output
- Use actual values from package.json, git remote, and current branch
- Include clickable GitHub/GitLab URLs (detect from git remote)
- Use current date for CHANGELOG entries
- Follow semantic versioning strictly
- Only include actual commits from git log
- Use emojis for visual clarity (✅ 📋 📝 💾 🚀)
- Detect package manager from lock files (package-lock.json → npm, yarn.lock →
  yarn, pnpm-lock.yaml → pnpm)
- If git remote is not GitHub, adjust URLs and instructions accordingly (e.g.,
  GitLab, Bitbucket)
- Default to develop branch if it exists, otherwise use current branch
- Gracefully handle cases where tags don't exist yet (first release)
