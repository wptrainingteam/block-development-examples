# Server Side Render Block

This example demonstrates how to build a simple block that is rendered on the server and displayed in the Editor using the `ServerSideRender` component.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Server Side Render Block](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/server-side-render-block-d26119) | This example demonstrates how to build a simple block that is rendered on the server and displayed in the Editor using the `ServerSideRender` component. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=server-side-rendering">server-side-rendering</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/server-side-render-block-d26119.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/server-side-render-block-d26119/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

-   This is a dynamic block that renders content on the server side. However, instead of using a `render.php` file, it uses a render callback function.
-   In the Editor, the block content defined in the callback function is rendered using the `ServerSideRender` component.
-   It's best practice to wrap the `ServerSideRender` component in a `Disabled` component. This ensures that users can't mistakenly interact with or modify the block's content directly in the editor, especially when such interaction is not intended.
-   This example also demonstrates how to register a custom attribute for the block and how to use it in the callback function.

## Related resources

-   [`ServerSideRender` documentation](https://developer.wordpress.org/block-editor/reference-guides/components/server-side-render/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
