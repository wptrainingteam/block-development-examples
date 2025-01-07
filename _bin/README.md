# \_bin Directory Scripts

This directory contains utility scripts used for managing and maintaining the Block Development Examples project.

## Available Scripts

You can run these scripts using the npm/pnpm commands defined in the root `package.json`:

### Table Generation

### Updating Documentation

-   `npm run  table:update` - Generates the main examples table in the root README.md
-   `npm run  table:update [example-slug]` - Update README table for a specific example
-   `npm run  table:update:all` - Updates all tables in the project documentation

### Date Management

-   `npm run dates:update` - Updates dates across the project files

> Note: the dates update for examples can also be done via the GitHub Action update-dates.yml

## Script Files Structure

The scripts are organized in the following structure:

```
.
├── CHANGELOG.md
├── README.md
├── src
│   ├── constants.ts
│   ├── index.ts
│   ├── services
│   │   ├── DatesService.ts
│   │   └── tableMarkdown.ts
│   ├── types
│   │   ├── config.ts
│   │   ├── errors.ts
│   │   └── example.ts
│   └── utils
│       ├── compose.ts
│       ├── errors.ts
│       ├── fileOperations.ts
│       ├── logging.ts
│       └── validation.ts
└── tsconfig.json
```

## Development

The scripts are written in TypeScript and use various utilities to manage project documentation and metadata. To modify or extend these scripts:

1. Navigate to the appropriate file in the `src` directory
2. Make your changes
3. Run the code using `ts-node `

As `ts-node` doesn’t check the TypeScript types, it’s strongly recommended to have in Visual Studio Code **a TypeScript linter or type checker like `typescript` enabled in your workspace** to catch type errors during development. Additionally, ensure that **TypeScript IntelliSense is configured properly** to help identify issues in real-time.

## Note

These scripts are essential for maintaining project consistency and automating routine tasks. **Always run them from the root directory of the project.**
