# Interactive Block using Interactivity API

> **Warning** > **This block requires Gutenberg 17.2 or superior to work**. The Interactivity API is, at the moment, not part of WordPress Core as it is still very experimental, and very likely to change.

> **Note**
> This block uses the API shared at [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/).

<!-- @TABLE EXAMPLES BEGIN -->

This block has been created with the `create-block-interactive-template` and shows a basic structure of an interactive block that uses the Interactivity API.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->

| Example                                                                                                                              | <span style="display: inline-block; width:250px">Description</span>                                              | Tags                                                                                                                                                                                                                                                                                                                                                                                                                                     | Download .zip                                                                                                                                                                                                                    | Live Demo                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Interactivity API Block](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-block-833d15) | Demonstrates the usage of WordPress's Interactivity API to create blocks with enhanced interactive capabilities. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=create-block-template">create-block-template</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=interactive-block">interactive-block</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=interactivity-api">interactivity-api</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/interactivity-api-block-833d15.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/interactivity-api-block-833d15/_playground/blueprint.json 'Click here to access a live demo of this example') |

## Understanding the Example Code

The block of the example has dynamic render defined at `render.php` and it enables the interactivity API via `block.json`(`"supports": { "interactivity": true }`)

-   The [store](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#the-store) for the block is defined at `view.js` that will be loaded in the frontend when the block is displayed
-   The markup used in `render.php` use directives such as [`data-wp-interactive`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-interactive), [`data-wp-on--click`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-on), [`data-wp-bind--hidden`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-bind), [`data-wp-context`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-context) or [`data-wp-effect`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-effect)
-   The [store](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#the-store) for the block is defined at `view.js` that will be loaded in the frontend when the block is displayed

## Related resources

Check the following resources for more info about the Interactivity API:

-   [Interactivity API docs](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity/docs)
-   [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)
-   [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/)
-   [“Interactivity API” category](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api) in Gutenberg repo discussions
-   [Make WordPress posts with tag `interactivity-api`](https://make.wordpress.org/core/tag/interactivity-api/)
-   [Interactivity API docs](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity/docs)

---

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
