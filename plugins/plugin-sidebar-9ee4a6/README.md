# Plugin Sidebar

This example demonstrates how to extend the WordPress block editor by adding a custom sidebar panel using the [`PluginSidebar`](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/) component.

The sidebar includes a text input field that saves data to post meta, showcasing the integration between the block editor's UI components and WordPress data management.

Key features:

-   Adds a new sidebar panel to the block editor interface
-   Implements post meta storage and retrieval
-   Demonstrates proper WordPress plugin registration
-   Shows usage of WordPress components and data hooks

![Screenshot sidebar](_assets/screenshot.png)

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Plugin Sidebar](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/plugin-sidebar-9ee4a6) | Shows how to add a custom sidebar to the editor using SlotFill and integrate it with post meta data. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=slotfill">slotfill</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=meta">meta</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=no-block">no-block</a></code></small> | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/plugin-sidebar-9ee4a6.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/plugin-sidebar-9ee4a6/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

-   Key implementation points:
    -   Uses [`registerPlugin()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#registerplugin) to register a new plugin instance
    -   Implements a custom meta field using [`register_post_meta()`](https://developer.wordpress.org/reference/functions/register_post_meta/) in PHP
    -   Uses [`useEntityProp`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityprop) hook to manage post meta data
    -   Creates a text control input that saves to post meta
-   Main components used:
    -   [`@wordpress/edit-post`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-post/): Provides `PluginSidebar` component
    -   [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/components/): Provides UI components like `TextControl` and `PanelBody`
    -   [`@wordpress/core-data`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/): Provides `useEntityProp` hook for data management
-   The meta field is registered with:
    -   Name: `sidebar_plugin_meta_block_field`
    -   Type: `string`
    -   Enabled in REST API via `show_in_rest: true`

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
