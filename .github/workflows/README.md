# GitHub Workflows

This directory contains GitHub Actions workflows that automate various tasks in the repository. Below is an overview of each workflow:

## Main Workflows

### 🚀 Zips on Deploy Branch (`main.yml`)

Handles the deployment process when changes are pushed to the trunk branch:

-   Merges trunk branch into deploy branch
-   Installs dependencies
-   Runs deployment tasks
-   Commits and pushes changes to deploy branch

### 🔍 Static Linting (`pull-request-actions.yml`)

Runs linting checks on pull requests and trunk branch pushes:

-   PHP file linting
-   JavaScript file linting
-   CSS file linting
-   Runs on Node.js 18 and latest LTS versions

## Data Management Workflows

### 👥 Update GitHub Contributors (`github-contributors.yml`)

Updates the list of project contributors:

-   Fetches contributor information
-   Updates `_data/examples.json`
-   Can be manually triggered

### 📊 Contributor Details (`contributor-details.yml`)

Maintains detailed contributor information:

-   Fetches detailed contributor data
-   Updates `_data/contributors.json`
-   Can be manually triggered

### 📅 Update Creation and Modification Dates (`update-dates.yml`)

Maintains file metadata:

-   Updates creation and modification dates
-   Updates `_data/examples.json`
-   Runs monthly and can be manually triggered

## Scripts

The `scripts/` directory contains shell scripts used by these workflows:

-   `fetch_contributors.sh`: Fetches basic contributor information
-   `fetch_contributor_details.sh`: Retrieves detailed contributor data
-   `update_dates.sh`: Updates file timestamps

## Permissions

Most workflows require write permissions to:

-   Push changes to branches
-   Update JSON data files
-   Commit changes

## Triggers

-   `main.yml`: Triggered on push to trunk branch
-   `pull-request-actions.yml`: Triggered on pull requests and trunk pushes
-   `update-dates.yml`: Runs monthly and manual trigger
-   Others: Can be manually triggered via workflow_dispatch
