# Minimal Gutenberg Block (No Build)

This example demonstrates how to create a basic Gutenberg block without requiring a build process. Instead of using JSX and modern JavaScript features that need transpilation, it uses vanilla JavaScript and WordPress's built-in scripts. This approach is perfect for learning the fundamentals of block development and for simple blocks that don't require complex UI components.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                                                        | <span style="display: inline-block; width:250px">Description</span>                                                    | Tags                                                                                                                                                                                                                                            | Download .zip                                                                                                                                                                                                                   | Live Demo                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Minimal Gutenberg Block (No Build)](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-no-build-e621a6) | Shows how to create a simple block without a build process, using vanilla JavaScript and WordPress's built-in scripts. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=minimal">minimal</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=no-build">no-build</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/minimal-block-no-build-e621a6.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/minimal-block-no-build-e621a6/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

The example demonstrates several key technical concepts:

-   Uses `registerBlockType` from `wp.blocks` to register a new block type
-   Implements a basic `edit` and `save` function using vanilla JavaScript
-   Shows how to use WordPress's built-in `createElement` function instead of JSX
-   Demonstrates block attribute management without complex state handling
-   Illustrates the minimal required configuration in `block.json`
-   Shows proper asset registration through `block.asset.php`

## Related resources

-   [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
-   [JavaScript Build Setup](https://developer.wordpress.org/block-editor/how-to-guides/javascript/js-build-setup/)
-   [Block Registration Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)
-   [Block Metadata Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)
-   [Creating Dynamic Blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
