# Non block React wp-data

This example demonstrates how to create a React application within the WordPress admin interface that leverages the `@wordpress/data` package for state management outside of the block editor context. It showcases practical patterns for integrating React components with WordPress data stores, making it an excellent reference for developers building admin-side applications that need to interact with WordPress data.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Non-block wp data with React](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/non-block-react-wp-data-56d6f3) | Demonstrates how to use @wordpress/data with React components outside of the block editor context, showing data management patterns. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=no-block">no-block</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=wp-data">wp-data</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/non-block-react-wp-data-56d6f3.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/non-block-react-wp-data-56d6f3/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

-   The example demonstrates how to register a custom admin page in WordPress using PHP
-   Shows integration of React with WordPress admin interface using `wp_enqueue_script`
-   Utilizes `@wordpress/data` hooks and selectors outside the block editor context:
    -   `useSelect` for retrieving data from WordPress stores
    -   `useDispatch` for triggering actions and updates
-   Implements proper data fetching and state management patterns
-   Showcases WordPress components usage in a standalone React application

## Related resources

-   [Data Module Reference](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/) | Block Editor Handbook
-   [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/) | Developer Documentation
-   [Building React Applications for WordPress](https://developer.wordpress.org/block-editor/how-to-guides/javascript/) | Block Editor Handbook
-   [WordPress Components Documentation](https://developer.wordpress.org/block-editor/reference-guides/components/) | Block Editor Handbook
-   [WordPress JavaScript Build Setup](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) | Block Editor Handbook

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
