# Changelog

## [1.2.5] - 2025-01-05

### Added

-   Created comprehensive README.md in \_bin directory
    -   Added documentation for available scripts
    -   Added directory structure overview
    -   Added development guidelines
    -   Added usage instructions for utility scripts

## [1.2.4] - 2024-12-21

### Changed

-   Modified table generation to show only relevant example in each plugin's README.md
-   Updated `npm run table:update:all` to respect single example per README rule

## [1.2.3] - 2024-12-21

### Added

-   Support for generating table for a single example by passing its slug
-   Added validation for example slug existence
-   Enhanced error messages for missing examples

## [1.2.2] - 2024-12-20

### Fixed

-   Added extensive debug logging to fetch_contributors.sh
-   Added type checking for GitHub API responses
-   Improved error handling for malformed API responses

## [1.2.1] - 2024-12-20

### Fixed

-   Fixed GitHub API response parsing in fetch_contributors.sh
-   Added better error handling for invalid API responses
-   Added null check for commit authors

## [1.2.0] - 2024-12-20

### Changed

-   Updated contributor format in examples.json to include full names
-   Modified fetch_contributors.sh to store contributor pairs [username, full_name]
-   Enhanced GitHub API integration to fetch user details

### Fixed

-   Improved contributor deduplication logic
-   Better error handling for API requests

## [1.1.0] - 2024-12-19

### Added

-   New GitHub Action to update creation and modification dates
-   Shell script to fetch Git history dates for examples
-   Daily automated updates of examples.json dates

### Changed

-   Updated fetch_contributors.sh to use tab indentation in output JSON
-   Preserved existing contributors while adding new ones from git history
-   Contributors are now merged instead of being replaced during automated updates

### Security

-   Removed hardcoded GitHub token from fetch_contributors.sh
-   Added proper environment variable handling for GitHub token

-   Error handling for GitHub API calls
-   Rate limit detection
-   Input validation for required environment variables
-   Better error messages for API and file operations

-   Improved contributor fetching logic with proper error handling
-   Added empty line filtering for contributor list

### Added

-   Initial version tracking
-   Basic contributor management system
-   Initial implementation of contributor fetching script
-   GitHub API integration for fetching contributors
-   Basic file processing functionality
-   Added descriptions to all tags in tags.json file
-   Enhanced tag documentation with markdown formatting and links

### Initial Release

-   Created initial project structure
-   Added examples.json with block development examples
-   Added tags.json with initial tag definitions

## 0.2.0 - 2024-12-18

### 0.2.5

-   Fixed linting issues in date formatting
    -   Fixed JSDoc @return tag
    -   Fixed line breaks and spacing
    -   Added proper date-fns types

### 0.2.4

-   Moved date formatting to utils/dates.ts
-   Fixed linting issues with date-fns imports

### 0.2.3

-   Added proper type definitions for date-fns

### 0.2.2

-   Switched to date-fns library for date formatting

### 0.2.1

-   Enhanced date formatting in example tables to use "MMM Dth, YYYY" format (e.g., "Jan 3rd, 2024")

## 1.1.0 (2024-01-06)

### 1.1.1

-   Updated blueprint.json in basic-block-translations plugin to use installPlugin step
-   Standardized plugin installation method across example plugins
