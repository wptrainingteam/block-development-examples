# Styling Blocks with Multiple Approaches

This example demonstrates different techniques for styling WordPress blocks, showcasing best practices for managing CSS in block development. You'll learn how to implement styles using multiple approaches including inline styles, default classes, custom classes, and separate stylesheets for editor and frontend contexts.

Key concepts covered:

-   Inline styles through `useBlockProps`
-   Default WordPress block classes (`wp-block-block-development-examples-stylesheets-79a4c3`)
-   Custom class implementation (`hasPerspective` through `useBlockProps`)
-   Editor-specific styling (`editor.scss`)
-   Shared frontend/editor styles (`style.scss`)

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                      | <span style="display: inline-block; width:250px">Description</span>                                                 | Tags                                                                                                                                                                                                                                          | Download .zip                                                                                                                                                                                                        | Live Demo                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Stylesheets](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/stylesheets-79a4c3) | Shows different approaches to adding and managing styles in blocks, including editor-specific and front-end styles. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=styles">styles</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=featured">featured</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/stylesheets-79a4c3.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/stylesheets-79a4c3/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Style Implementation Methods

1. **Inline Styles**
    - Applied directly through `useBlockProps`
    - Provides dynamic styling capabilities
2. **CSS Classes**
    - Default class: `wp-block-block-development-examples-stylesheets-79a4c3`
    - Custom class: `hasPerspective` (applied conditionally)

### CSS Output Structure

The styles are output in several ways:

1. **Frontend Output**
    - Block wrapper receives inline styles and classes
    - Shared styles loaded via `style.scss`
    - Editor-specific styles isolated in `editor.scss`

![](./_assets/frontend-view.png)

The inline styles and classes (added via `useBlockProps`) for the block wrapper are added to the `<div>` container of the block

![](./_assets/source-code-html-output.png)

The styles shared by the editor and the frontend (`style.scss`) have been inserted in a `style` tag

![](./_assets/source-code-style-html.png)

## Related Resources

-   [Block Editor Handbook - Edit and Save](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/)
-   [`useBlockProps` Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops)
-   [WordPress Block Styles](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/)
-   [CSS in Gutenberg](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-styles)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
