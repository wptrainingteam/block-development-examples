# Basic Block Translation 3df23d

The goal of this example is to showcase how to use translations in a block.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Basic Block with Translations](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/basic-block-translations-3df23d) | Shows how to implement internationalization (i18n) in a WordPress block using both PHP and JavaScript translations, demonstrating proper setup of translation files and functions. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=static-rendering">static-rendering</a></code></small> | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/basic-block-translations-3df23d.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/basic-block-translations-3df23d/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

Both the `edit.js` and `save.js` files import the `__` function `@wordpress/i18n` to apply translations to the texts used in the code.

-   The [`__` function](https://developer.wordpress.org/reference/functions/__/) receives the text and a namespace as parameters
-   At `index.php` we tell WordPress our JavaScript contains translations, using the `wp_set_script_translations()` function.
-   At `languages/` folder there are all the translations files (the source files and the `.mo` ones actually used to apply the translations)

## Related resources

-   [Internationalization](https://developer.wordpress.org/block-editor/how-to-guides/internationalization/)
-   [`__()`](https://developer.wordpress.org/reference/functions/__/)
-   [`wp_set_script_translations()`](https://developer.wordpress.org/reference/functions/wp_set_script_translations/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
