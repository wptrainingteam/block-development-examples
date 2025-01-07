# Recipe Card

This example demonstrates how to create a feature-rich custom block for recipe content using the WordPress Block Editor. It showcases essential block development concepts like RichText fields, media handling, and structured content storage. The block allows users to create beautiful recipe cards with a title, featured image, ingredients list, and cooking instructions, all in a user-friendly interface.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Recipe](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/recipe-card-744e8a) | A practical example showing how to create a complex block for recipe content with multiple editable fields and structured data. |  | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/recipe-card-744e8a.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/recipe-card-744e8a/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

-   Uses `block.json` for modern block registration with metadata including attributes for title, media, ingredients, and instructions
-   Implements `RichText` component for editable content areas with proper HTML structure preservation
-   Demonstrates `MediaUpload` usage for handling image selection and display
-   Shows proper attribute management using `setAttributes` for state updates
-   Implements separate `edit.js` and `save.js` components for editor and frontend rendering
-   Uses SCSS for styling with proper scoping and responsive design
-   Includes internationalization support through WordPress i18n functions
-   Provides example content through the block's `example` property in block.json

## Related resources

-   [Block Editor Handbook - RichText Component](https://developer.wordpress.org/block-editor/reference-guides/components/rich-text/)
-   [WordPress Block Development Tutorial](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/)
-   [Media Handling in Blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/media-upload/)
-   [Block Attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)
-   [Block Metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
