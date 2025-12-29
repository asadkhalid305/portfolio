# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2025-12-29

### Added

- Redesigned testimonials section with masonry layout and improved cards

### Changed

- Enhanced content management system
- Updated events and improved UI consistency

## [1.2.1] - 2025-12-28

### Changed

- Rebranded "Movie Picker" project to "StreamWise AI" and updated project description

## [1.2.0] - 2025-12-25

### Added

- Dynamic routing for blogs and events with MDX support (`/contribution/[type]/[slug]`)
- Project detail pages with dynamic routing (`/projects/[slug]`) for comprehensive project showcase
- External app integration via rewrite rules for `/apps/streamwise-ai`
- Comprehensive release preparation workflow with automated changelog generation
- Enhanced project documentation and setup instructions
- Chatbot API test script with various test scenarios

### Changed

- Major code restructuring for improved maintainability and scalability (#52)
- Enhanced responsive design for header links and navigation components
- Improved project structure with better file organization
- Updated chatbot dataset with current portfolio information

### Fixed

- LinkedIn profile aria-label for improved accessibility
- Enhanced focus styles for better keyboard navigation visibility

## [1.1.0] - 2024-12-24

### Added

- Dedicated section pages for About, Experience, Journey, Contributions, Testimonials, and Contact
- Contact form component with API integration for message handling
- Contact API endpoint for processing user inquiries
- OpenRouter integration for chatbot with feature flag support
- Chatbot testing suite with comprehensive test scenarios
- Release preparation workflow with automated changelog generation
- Enhanced project documentation in README

### Changed

- Migrated chatbot from OpenAI to OpenRouter (configurable via feature flags)
- Updated chatbot training dataset with current portfolio information
- Major code refactoring for improved maintainability and organization
- Upgraded Next.js from 14.1.1 to 15.5.9
- Upgraded React to version 19
- Enhanced UI/UX across all sections
- Improved component structure and organization
- Updated multiple dependencies for security and features

### Fixed

- LinkedIn profile aria-label for better accessibility
- Enhanced focus styles for keyboard navigation

### Security

- Updated brace-expansion from 1.1.11 to 1.1.12
- Updated js-yaml from 4.1.0 to 4.1.1
- Updated cross-spawn from 7.0.3 to 7.0.6
- Updated nanoid from 3.3.6 to 3.3.8
- Updated micromatch from 4.0.5 to 4.0.8
- Updated braces from 3.0.2 to 3.0.3
- Updated glob from 10.4.5 to 10.5.0

## [1.0.1] - 2024-06-10

### Changed

- Previous release (details not documented)

## [1.0.0] - 2024-06-10

### Added

- Initial stable release of portfolio website

## [0.1.0] - 2024-06-10

### Added

- Initial beta release

[unreleased]: https://github.com/asadkhalid305/portfolio/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/asadkhalid305/portfolio/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/asadkhalid305/portfolio/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/asadkhalid305/portfolio/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/asadkhalid305/portfolio/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/asadkhalid305/portfolio/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/asadkhalid305/portfolio/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/asadkhalid305/portfolio/releases/tag/v0.1.0
