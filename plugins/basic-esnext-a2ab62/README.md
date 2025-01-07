# Basic Block with ESNext and Build Process

This example demonstrates how to create a modern WordPress block using ESNext (modern JavaScript) and JSX syntax. It showcases the fundamental setup required for block development with a build process powered by `@wordpress/scripts`, which handles all the necessary tooling configuration.

Key concepts covered:

-   Modern JavaScript (ESNext) and JSX syntax usage
-   Build process setup with `@wordpress/scripts`
-   Basic block registration and rendering
-   Static block implementation
-   NPM scripts for development and production builds

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                        | <span style="display: inline-block; width:250px">Description</span>                                                                          | Tags                                                                                                                   | Download .zip                                                                                                                                                                                                         | Live Demo                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Basic ESNext](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/basic-esnext-a2ab62) | Demonstrates how to create a basic block using modern JavaScript (ESNext) and JSX syntax with a build process powered by @wordpress/scripts. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=minimal">minimal</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/basic-esnext-a2ab62.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/basic-esnext-a2ab62/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Build Process

1. **Development Mode**

    - Uses `npm start` for development
    - Provides hot reloading
    - Generates source maps for debugging
    - Watches for file changes

2. **Production Build**
    - Uses `npm run build` for production
    - Optimizes and minifies code
    - Generates production-ready assets
    - Performs tree shaking

### Block Implementation

1. **Block Registration**

    - Block metadata defined in `block.json`
    - Registered using `registerBlockType`
    - Uses modern ESNext syntax for cleaner code

2. **Rendering**
    - Static block implementation in `save.js`
    - Uses JSX for template rendering
    - Implements `useBlockProps` for block attributes

### File Structure

```
src/
├── edit.js      # Block editor component
├── save.js      # Saved content component
├── style.scss   # Frontend & editor styles
├── editor.scss  # Editor-only styles
├── block.json   # Block metadata
└── index.js     # Block registration
```

## Related Resources

-   [Block Editor Handbook - Getting Started](https://developer.wordpress.org/block-editor/getting-started/)
-   [ESNext Standard](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#esnext)
-   [Block Registration API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)
-   [@wordpress/scripts Package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
-   [Static vs Dynamic Blocks](https://developer.wordpress.org/block-editor/getting-started/fundamentals/#static-or-dynamic-rendering-of-a-block)
-   [Block Metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
