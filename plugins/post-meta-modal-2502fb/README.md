### Post Meta Modal 2502fb

This example adds a modal in the Post Editor that allows users to define custom post metadata without having to use the legacy Custom Fields meta box.

<img src="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/post-meta-modal-2502fb/_assets/post-meta-modal.gif"/>

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Post Meta Modal](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/post-meta-modal-2502fb) | Shows how to create a modal interface for editing post meta data outside of the block context. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=meta">meta</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=no-block">no-block</a></code></small> | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/post-meta-modal-2502fb.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/post-meta-modal-2502fb/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Overview

This example does two things. First, it registers [three custom fields](https://github.com/WordPress/block-development-examples/blob/125ca3add64768323c738e477246dbc8f2e202f4/plugins/post-meta-modal-2502fb/post-meta-modal-2502fb.php#L50) for posts. Then it [registers a new plugin](https://github.com/WordPress/block-development-examples/blob/125ca3add64768323c738e477246dbc8f2e202f4/plugins/post-meta-modal-2502fb/src/index.js#L141) for the Post Editor. This plugin allows users to open a modal and set the custom fields for each post. The modal can be opened using the Options panel or the Command Palette (`cmd + k`) as seen in the gif above.

The plugin utilizes the [`PluginMoreMenuItem`](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/) slot and multiple [WordPress components](https://developer.wordpress.org/block-editor/reference-guides/components/) (`Modal`, `RadioControl`, `SelectControl`, `TextControl` ). The custom command for the Command Palette is added using [`useCommand`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand).

## Related resources

- [SlotFills Reference](https://developer.wordpress.org/block-editor/reference-guides/slotfills/)
- [Component Reference](https://developer.wordpress.org/block-editor/reference-guides/components/)
- [@wordpress/commands](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand) package reference
- [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) documentation

----

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
