# Interactive Router (regions) 2f43f8

This example demonstrates how to use regions with the `@wordpress/interactivity-router` package (see [video](https://youtu.be/ffbTQ1jv-ZA))

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                                       | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                                                                                                                                                                                         | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F "Why an ID for every example?")) | Download .zip                                                                                                                                                                                                                                                           | Live Demo                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-router-2f43f8) | Interactivity Router (regions) example                                    | <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#interactivity-api">INTERACTIVITY API</a></code></small>, <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#interactivity-router">INTERACTIVITY ROUTER</a></code></small> | `2f43f8`                                                                                                                                | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/interactivity-router-2f43f8.zip "Install the plugin using this zip and activate it. Then use the ID of the block (2f43f8) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/interactivity-router-2f43f8/_playground/blueprint.json "Use the ID of the block (2f43f8) to find it and add it to a post to see it in action") |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

The `interactivity-router-2f43f8` block allows to have inner blocks wrapped in the region with ID `region-example-2f43f8`. This allows to have different instances of the block with different content.

When navigation happens from a page A with region`region-example-2f43f8`to another page B with region `region-example-2f43f8` and that navigation is done via using `actions.navigate` (from `wordpress/interactivity-router`), then the content from region `region-example-2f43f8` on B is brought to region `region-example-2f43f8` on A. The URL is also update in the client side.

This example contains:

-   A block that can contain [inner blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/)
-   A block with attributes `prev` and `next` and Inspector controls to edit this values
-   The markup used in `render.php` uses the directive `data-wp-router-region` to establish a router region which content may vary on each instance of the block.

## Related resources

Check the following resources for more info about the Interactivity API:

-   [Interactivity API docs](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity/docs)
-   [Interactivity API Examples](https://wordpress.github.io/block-development-examples?tags=interactivity-api&operator=isAny)
-   [“Interactivity API” category](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api) in Gutenberg repo discussions

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
