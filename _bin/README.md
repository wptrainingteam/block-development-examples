# Block Development Examples - Build Scripts

This folder contains utility scripts for managing WordPress block development examples. These scripts help automate various tasks like creating new examples, updating documentation, and managing the codebase.

## Directory Structure

```
_bin/
├── copyGutenbergExample/   # Scripts for copying/creating new examples
├── utils/                  # Shared utility functions
├── _addExamplesPerTagReadme.js
├── constants.js
├── prepareDataForApp.js
└── updateTableMarkdown.js
```

## Available Scripts

### Creating Examples

```bash
# Create a new example by copying an existing one
npm run create-example:copy

# Create a brand new example from template
npm run create-example:new
```

The `create-example:copy` script launches an interactive CLI that:
1. Prompts you to select a source example
2. Asks for a new example name
3. Generates a unique ID
4. Lets you select tags
5. Creates the new example with customized files

### Updating Documentation

```bash
# Update README table for a specific example
npm run table:update [example-slug]

# Update all README tables
npm run table:update:all
```

### Utility Scripts

```bash
# Generate a random hex code (used for example IDs)
npm run get:hexcode
```

## Core Files Explained

### copyGutenbergExample/
- `index.js` - Main entry point for example creation wizard
- `initCreateExample.js` - Handles the example creation process
- `customizeBlockJson.js` - Updates block.json for new examples
- `customizePackageJson.js` - Updates package.json for new examples
- `addExamplesJson.js` - Adds new example to examples.json registry
- `duplicateExampleNewName.js` - Handles folder duplication

### utils/
- `generateExamplesTableMarkdown.js` - Generates markdown tables for documentation
- `log.js` - Consistent logging utilities with color support
- `randomHexCode.js` - Generates unique example IDs

### Root Files
- `constants.js` - Shared configuration and constants
- `prepareDataForApp.js` - Processes data for the web application
- `updateTableMarkdown.js` - Updates README.md tables
- `_addExamplesPerTagReadme.js` - Manages tag-based documentation

## Key Features

1. **Example Management**
   - Create new examples from existing ones
   - Generate unique IDs for examples
   - Customize block and package configurations
   - Update documentation automatically

2. **Documentation**
   - Auto-generate markdown tables
   - Maintain tag-based organization
   - Keep README files in sync

3. **Development Tools**
   - Random ID generation
   - Consistent logging
   - File operation utilities

## File Operations

The scripts handle several types of files:
- `block.json` - Block configuration
- `package.json` - Package configuration
- `examples.json` - Example registry
- `README.md` - Documentation files

## Data Structure

Examples are organized with:
- Unique slug/ID combinations
- Associated tags
- Descriptions
- Related files and configurations

## Best Practices

1. Always use the provided scripts for:
   - Creating new examples
   - Updating documentation
   - Managing configurations

2. Maintain consistent formatting:
   - Use provided logging utilities
   - Follow existing naming conventions
   - Keep documentation up-to-date

3. Error Handling:
   - Scripts include basic error handling
   - Check console output for issues
   - Verify file operations completed successfully

## Dependencies

Key dependencies used by these scripts:
- `@inquirer/prompts` - Interactive CLI
- `chalk` - Console styling
- `execa` - Process execution
- `fs-extra` - Enhanced file operations
- `markdown-table` - Table generation
- `replace-in-file` - File content updates

## Contributing

When modifying these scripts:
1. Maintain TypeScript-style type safety
2. Follow functional programming patterns
3. Update documentation as needed
4. Test thoroughly before committing

## Related Documentation

- [Block Development Examples Wiki](https://github.com/WordPress/block-development-examples/wiki)
- [WordPress Block Development](https://developer.wordpress.org/block-editor/)