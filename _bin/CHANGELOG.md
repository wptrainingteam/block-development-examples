# Changelog

All notable changes to the build scripts will be documented in this file.

## [0.1.3] - 2024-03-XX

### Added

-   Created new entry point `src/index.ts`:
    -   Unified interface for table generation and data preparation
    -   CLI support for different commands
    -   Proper error handling for CLI operations

### Changed

-   Updated npm scripts to use new entry point:
    -   `table:update` now uses `src/index.ts generate`
    -   `table:update:all` now uses `src/index.ts generate all`
    -   `prepare:data` now uses `src/index.ts prepare`
-   Added new development scripts:
    -   `build:scripts` - Compiles TypeScript files
    -   `dev:scripts` - Watches and compiles TypeScript files
-   Improved configuration management:
    -   Added URL configuration through constants
    -   Centralized URL management in TableGenerationConfig
    -   Added type definitions for URL configuration
    -   Simplified URL handling in services
    -   Created constants barrel file for better imports
    -   Fixed template literal formatting in URL generation

### Removed

-   Cleaned up unnecessary files:
    -   Removed `__updateTableMarkdown.js` - Old JavaScript version
    -   Removed `__generateExamplesTableMarkdown.js` - Migrated to TypeScript
    -   Removed `updateTableMarkdown copy.ts` - Duplicate file
    -   Removed `prepareDataForApp.js` - Migrated to DataPreparationService
-   Removed legacy entry points:
    -   Removed `updateTableMarkdown.ts` - Replaced by new entry point
    -   Removed `_addExamplesPerTagReadme.js` - Functionality moved to services
    -   Removed `utils/__generateExamplesTableMarkdown.js` - Migrated to TypeScript
-   Removed old entry points in favor of unified `src/index.ts`

### Added

-   Implemented comprehensive error handling system:
    -   Custom error types for different failure scenarios
    -   Detailed error messages with context
    -   Proper error propagation
    -   Type-safe error handling

### Changed

-   Enhanced file operations with specific error types
-   Improved validation with detailed error messages
-   Added additional validation checks
-   Updated error handling in TableMarkdownService

### Fixed

-   Improved error messages clarity and context
-   Added missing error checks for empty data
-   Fixed error propagation in async operations
-   Fixed linting issues:
    -   Removed extra tabs in TableMarkdownService
    -   Fixed line endings in error type definitions

## [0.1.2] - 2024-03-XX

### Added

-   Implemented new `TableMarkdownService` class:
    -   Object-oriented approach to table generation
    -   Strong typing for all operations
    -   Modular methods for different aspects of table generation
    -   Improved error handling with try/catch blocks
    -   Support for custom table formatting
    -   Flexible configuration options

### Changed

-   Refactored table generation logic into smaller, focused methods
-   Improved URL generation with dedicated methods
-   Enhanced tag processing with type safety

### Fixed

-   Fixed linting issues in TableMarkdownService:
    -   Removed extra whitespace and tabs
    -   Fixed line breaks in conditionals
    -   Improved template literal formatting
    -   Simplified table generation formatting

## [0.1.1] - 2024-03-XX

### Added

-   New `DataPreparationService` class for processing example data
-   TypeScript conversion of `prepareDataForApp.js`:
    -   Strong typing for examples and tags
    -   Proper error handling for file operations
    -   Object-oriented structure with clear responsibilities
    -   Interface for examples grouped by tag

### Fixed

-   Fixed variable shadowing in DataPreparationService
-   Added missing logging module
-   Fixed line endings in TypeScript files

## [Unreleased]

### Added

-   Created new `src/` directory structure with organized modules:
    -   `src/types/` - Type definitions and interfaces
    -   `src/utils/` - Shared utility functions
    -   `src/services/` - Core business logic
-   New type definitions for Examples and Configuration
-   New utility modules for file operations and validation
-   New TableMarkdownService class structure
-   Added new logging utility module

### Removed

-   `_bin/__updateTableMarkdown.js` - Removed duplicate JavaScript file in favor of TypeScript version
-   `_bin/updateTableMarkdown copy.ts` - Removed duplicate TypeScript file
-   `_bin/utils/__generateExamplesTableMarkdown.js` - Removed old JavaScript implementation

### Changed

-   Consolidated table markdown generation logic into single TypeScript implementation
-   Removed duplicate code between JavaScript and TypeScript files
-   Improved code organization by removing redundant files

### Maintained

-   `_bin/updateTableMarkdown.ts` - Main TypeScript implementation for table generation
-   `_bin/utils/generateExamplesTableMarkdown.ts` - Core utility function for table generation
-   `_bin/prepareDataForApp.js` - Data preparation functionality (to be converted to TypeScript)

### Technical Debt

-   Convert `prepareDataForApp.js` to TypeScript
-   Move existing table markdown generation logic to TableMarkdownService
-   Implement proper error handling across files
-   Add input validation
-   Create shared interfaces for data structures
-   Improve logging implementation

### Fixed

-   Fixed linting issues in new TypeScript files:
    -   Proper indentation using tabs
    -   Consistent spacing in type declarations
    -   Proper line endings
    -   Import formatting
