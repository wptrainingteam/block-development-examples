# Slotfill Example

This example demonstrates how to use WordPress SlotFill system to extend the editor interface with custom components. It showcases two main SlotFill implementations:

-   `PluginSidebar`: Adds a custom sidebar panel to the editor with form controls
-   `PluginDocumentSettingPanel`: Extends the document settings panel with custom meta fields

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SlotFill](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/slotfill-2fb190) | Shows how to use WordPress SlotFill system to extend the editor interface with custom components. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=no-block">no-block</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=slotfill">slotfill</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/slotfill-2fb190.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/slotfill-2fb190/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

See Individual Examples:

-   [PluginSidebar](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/slotfill-2fb190/_playground/blueprint-slot1.json)
-   [PluginDocumentSettingPanel](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/slotfill-2fb190/_playground/blueprint-slot2.json)

## Understanding the Example Code

The example demonstrates several key technical concepts:

-   Uses `registerPlugin` from `@wordpress/plugins` to register custom editor extensions
-   Implements two different SlotFill components:
    -   `PluginSidebar`: Creates a collapsible sidebar with custom UI components
    -   `PluginDocumentSettingPanel`: Adds a panel to the Document Settings sidebar
-   Demonstrates state management using React hooks (`useState`)
-   Shows integration with WordPress data layer through `useEntityProp` and `useSelect`
-   Implements post meta handling with proper registration and REST API support
-   Uses WordPress components library for consistent UI (`TextControl`, `SelectControl`, `Button`, etc.)

## Related resources

-   [SlotFill Reference](https://developer.wordpress.org/block-editor/reference-guides/slotfills/)
-   [Plugin Extensibility](https://developer.wordpress.org/block-editor/how-to-guides/plugin-sidebar-0/)
-   [Components & UI](https://developer.wordpress.org/block-editor/reference-guides/components/)
-   [Data Module Reference](https://developer.wordpress.org/block-editor/reference-guides/data/)
-   [WordPress Components Storybook](https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
