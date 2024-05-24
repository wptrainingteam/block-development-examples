# Editable Block 1b8c51

The goal of this example is to showcase how to create a block that is editable and how core components can be enhanced.

This block also show the use of e2e testing for a block.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Folder                                                                                                 | <span style="display: inline-block; width:250px">Short description</span> | Tags | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F 'Why an ID for every example?')) | Download .zip                                                                                                                                                                                                                                                     | Live Demo                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/editable-block-1b8c51) | Block Editable                                                            |      | `1b8c51`                                                                                                                                 | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/editable-block-1b8c51.zip 'Install the plugin using this zip and activate it. Then use the ID of the block (1b8c51) to find it and add it to a post to see it in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/editable-block-1b8c51/_playground/blueprint.json 'Use the ID of the block (1b8c51) to find it and add it to a post to see it in action') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

Some key ideas for this example:

-   The use of `RichText` component as the most versatile editable component in `basic-editable-block-1b8c51`
-   The capacity of enhancing `RichText` component (or any other component) by using Higher Order Components (or custom hooks). See `withCharLimit.js` in the `enhanced-editable-block-1b8c51` block
-   The use of attributes to store data of the block and how we can set the attribute to store (and read from) the html itself

## Related resources

-   [`RichText` reference in the Block Editor Handbook](https://developer.wordpress.org/block-editor/reference-guides/richtext/)
-   [`RichText` component documentation on GitHub](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md)
    check out the .

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
