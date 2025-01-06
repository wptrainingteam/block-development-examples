### Block Development Examples - Inner Blocks dcd824

The goal of this example is to show how the component `InnerBlocks` allows to create custom blocks that accepts other blocks inside.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Inner Blocks](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/inner-blocks-dcd824) | Demonstrates how to create blocks that can contain other blocks using InnerBlocks component. |  | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/inner-blocks-dcd824.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/inner-blocks-dcd824/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

At `edit.js` we can see how we import `InnerBlocks` from `@wordpress/block-editor` and use it inside our `Edit` component by setting a specific "template" for this block every time is inserted. From `block.json` we define the "allowedBlocks" that are allowed to be inserted within the `InnerBlocks` part of the block.

## Related resources

-   [Nested Blocks: Using InnerBlocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/)
-   [`templateLock` docs](https://github.com/WordPress/gutenberg/blob/bb73da7b19ca11be56b0d3c430434b7b4093059f/packages/block-editor/src/components/inner-blocks/README.md#templatelock)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/juanma-wp/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
