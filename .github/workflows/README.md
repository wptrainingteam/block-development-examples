# GitHub Workflows

This directory contains GitHub Actions workflows that automate various tasks in the repository. Below is an overview of each workflow:

## Main Workflows

### 🚀 Generate Examples Zips and Create Release (`release-zips.yml`)

Handles the creation and deployment of plugin zip packages:

-   Generates zip files for all examples
-   Creates versioned releases with date-based tags
-   Maintains a "latest" release that's always up to date
-   Can be triggered manually or on push to trunk branch
-   Uses pnpm for dependency management
-   Runs on Node.js environment

### 🔍 Static Linting (`static-linting.yml`)

Performs comprehensive code quality checks:

-   PHP file linting using Composer
-   JavaScript file linting
-   CSS file linting
-   Runs on Node.js 18 and latest LTS versions
-   Uses pnpm for package management
-   Triggered on pull requests and trunk branch pushes

## Data Management Workflows

### 👥 GitHub Contributors Management

#### Update Contributors List (`github-contributors.yml`)

-   Updates basic contributor information
-   Maintains contributor records
-   Can be manually triggered

#### Contributor Details (`contributor-details.yml`)

-   Fetches and updates detailed contributor information
-   Updates contributor metadata
-   Supports manual triggering

### 📅 Date Management (`update-dates.yml`)

-   Maintains creation and modification dates
-   Updates example metadata
-   Runs on a schedule and supports manual triggers

## Scripts Directory

The `scripts/` directory contains supporting shell scripts used by these workflows.

## Workflow Permissions

Workflows require appropriate GitHub permissions for:

-   Creating and updating releases
-   Pushing to branches
-   Managing workflow artifacts
-   Updating repository data

## Trigger Methods

-   Push to trunk branch
-   Pull request events
-   Manual triggers via workflow_dispatch
-   Scheduled runs (for specific workflows)
