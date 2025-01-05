# Interactivity Api Countdown 3cd73e

> **Warning**
> **This block requires Gutenberg 17.2 or superior to work**. The Interactivity API is, at the moment, not part of WordPress Core as it is still very experimental, and very likely to change. 

> **Note**
> This block uses the API shared at [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/). 

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Interactivity API Countdown](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e) | Advanced example showing how to create an interactive countdown timer using the WordPress Interactivity API. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=dynamic-rendering">dynamic-rendering</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=interactive-block">interactive-block</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=interactivity-api">interactivity-api</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=experimental">experimental</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=block-toolbar">block-toolbar</a></code></small> | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/interactivity-api-countdown-3cd73e.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/interactivity-api-countdown-3cd73e/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

The block of the example has dynamic render defined at `render.php` and it enables the interactivity API via `block.json`(`"supports": { "interactivity": true }`)
- The [store](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#the-store) for the block is defined at `view.js` that will be loaded in the frontend when the block is displayed
- The markup used in `render.php` use directives such as [`data-wp-interactive`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-interactive) and [`data-wp-init`](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md#wp-init)
- It's interesting in the in the [`render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/interactivity-api-countdown-3cd73e/src/render.php):
  - the initial data ([calculated from the attributes data](https://github.com/WordPress/block-development-examples/blob/4ea6d4a8fff9f44b44f617c3a5ddc6467c222366/plugins/interactivity-api-countdown-3cd73e/src/render.php#L22)) is set in the local context via [`data-wp-context`](https://github.com/WordPress/block-development-examples/blob/4ea6d4a8fff9f44b44f617c3a5ddc6467c222366/plugins/interactivity-api-countdown-3cd73e/src/render.php#L33) 
  - The html `<span><span data-wp-text="state.days"></span>D</span>` points to the _getters_ in the state (defined in the `view.js` file), which will be updated when these values change
- It's interesting in the in the [`view.js`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/interactivity-api-countdown-3cd73e/src/view.js)
  - the state defines some getters (`seconds`, `minutes`, `hours`, `days` ) which values will change every time `context.remaining` change
  - `startCountdown` initializes `context.remaining` with the values got from the context and sets a `setInterval` to update this value (minus 1) every second


## Related resources

Check the following resources for more info about the Interactivity API:
- [Interactivity API docs](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
- [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)
- [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/)
- [“Interactivity API” category](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api) in Gutenberg repo discussions
- [Make WordPress posts with tag `interactivity-api`](https://make.wordpress.org/core/tag/interactivity-api/)
- [Changelog - Tracking Breaking Changes in the Interactivity API - Gutenberg: 17.2 (Dec 6, 2023)](https://github.com/WordPress/gutenberg/discussions/52906#discussioncomment-7810998) 


----

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
