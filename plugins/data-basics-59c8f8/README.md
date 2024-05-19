### Block Development Examples - Data Basics 59c8f8

This example shows how to create a React app in a WordPress admin page. A detailed description of this project is available in the "How to Guide": [Create your First App with Gutenberg Data](https://developer.wordpress.org/block-editor/how-to-guides/data-basics/) (in the [Block Editor Handbook](https://developer.wordpress.org/block-editor))

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                              | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                                                                                                                                                                                                                                                                               | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F "Why an ID for every example?")) | Download .zip                                                                                                      | Live Demo                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) | Data Basics - @wordpress/data                                             | <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#no-block">NO BLOCK</a></code></small>, <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#wp-data">WP DATA</a></code></small>, <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#featured">FEATURED</a></code></small> | `59c8f8`                                                                                                                                | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/data-basics-59c8f8.zip "") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/data-basics-59c8f8/_playground/blueprint.json "") |
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
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
