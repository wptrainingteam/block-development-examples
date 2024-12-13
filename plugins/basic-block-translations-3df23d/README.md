# Basic Block Translation 3df23d

The goal of this example is to showcase how to use translations in a block.

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

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
