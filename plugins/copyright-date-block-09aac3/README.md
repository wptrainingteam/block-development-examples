This "Copyright Date" block utilizes static and dynamic rendering, block supports, custom attributes, and a custom Settings panel. 

This example is directly adapted from the resulting code got when following the quick steps explained at [Block Editor Handbook / Getting Started / Quick Start Guide](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/)

```
npx @wordpress/create-block copyright-date-block --template @wordpress/create-block-tutorial-template
```

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copyright Date Block](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) | Example of a block that combines both static and dynamic rendering to display copyright information. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=dynamic-rendering">dynamic-rendering</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=static-rendering">static-rendering</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=create-block">create-block</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=featured">featured</a></code></small> | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/copyright-date-block-09aac3.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/copyright-date-block-09aac3/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

Some highlights about the code:
- It defines at `render.php` the server-side rendering of the block which will generate the markup to be returned to the browser at request time
- It also defines the markup representation of the block at `save.js` which will be stored in the DB. This representation of the block in the DB will be returned to the browser in case the plugin is uninstalled or disabled
- It builds custom settings controls for the block in the Sidebar Panel with `InspectorControls`
- It uses some UI components such as `PanelBody`, [`TextControl`](https://wordpress.github.io/gutenberg/?path=/docs/components-textcontrol--docs) and [`ToggleControl`](https://wordpress.github.io/gutenberg/?path=/docs/components-togglecontrol--docs) from ['@wordpress/components'](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/);


## Related resources

- [Block Editor Handbook / Getting Started / Quick Start Guide](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/)
- ['@wordpress/components'](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/)
- [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/)


----

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
