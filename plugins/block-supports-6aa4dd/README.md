### Block Development Examples - Block Supports 6aa4dd

The goal of this example is to showcase the implementation of a block with `supports`

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Block Supports](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) | Showcases how to use WordPress block supports to add standard features like alignment, colors, and typography to blocks. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=supports">supports</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=featured">featured</a></code></small> | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/block-supports-6aa4dd.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/block-supports-6aa4dd/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

- The block has a [`supports` definition](https://github.com/WordPress/block-development-examples/blob/e804d8416775de94fccae27be6f26ae0ae75b3d9/plugins/block-supports-6aa4dd/src/block.json#L25) in its `block.json`
- The generated properties for `support` are properly added to the wrapping element of the block in both the `Edit` and `Save` components via the `useBlockProps` hook.

## Related resources

- [Block API: Supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/)
- [`useBlockProps` hook](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) 

----

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)