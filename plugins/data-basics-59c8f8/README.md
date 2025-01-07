# Data Basics `@wordpress/data`

This example shows how to create a React app in a WordPress admin page. A detailed description of this project is available in the "How to Guide": [Create your First App with Gutenberg Data](https://developer.wordpress.org/block-editor/how-to-guides/data-basics/) (in the [Block Editor Handbook](https://developer.wordpress.org/block-editor))

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Data Basics - @wordpress/data](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) | Introduction to using @wordpress/data for state management in WordPress, covering basic concepts and patterns. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=no-block">no-block</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=wp-data">wp-data</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=featured">featured</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/data-basics-59c8f8.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/data-basics-59c8f8/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

The `index.js` defines a root React component containing the app (`MyFirstApp`) that is "inserted" in the DOM via [`createRoot` of `react-dom`](https://react.dev/reference/react-dom/client/createRoot)

-   [`useSelect`](https://developer.wordpress.org/block-editor/reference-guide/packages/packages-_data/#useselect) is used to get info about the entities (pages)
-   [`useDispatch`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-_data/#usedispatch) is used to trigger actions over the entities (pages)
-   Several UI components are used from [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/components/)

## Related resources

-   [useEntityRecords: an easier way to fetch WordPress data](https://developer.wordpress.org/news/2023/05/useentityrecords-an-easier-way-to-fetch-wordpress-data/) | Developer Blog
-   [Application state managed withDispatch, withSelect and compose 101](https://developer.wordpress.org/news/2022/12/application-state-managed-withdispatch-withselect-and-compose-101/) | Developer Blog
-   [useSelect](https://developer.wordpress.org/block-editor/reference-guide/packages/packages-data/#useselect) | Block Editor Handbook
-   [data module documentation](https://developer.wordpress.org/block-editor/reference-guide/packages/packages-data/) | Block Editor Handbook
-   [WordPress API documentation](https://developer.wordpress.org/rest-api/reference/pages/) | Block Editor Handbook
-   [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/components/) (also see [Storybook](https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page))

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
