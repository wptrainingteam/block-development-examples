# Block Internationalization Implementation

This example demonstrates how to implement internationalization (i18n) in WordPress blocks, enabling your blocks to be translated into different languages. Learn how to properly set up translation files and functions for both PHP and JavaScript components of your blocks.

Key concepts covered:

-   Translation function implementation
-   Language file organization
-   PHP and JavaScript i18n
-   Translation loading process
-   Text domain handling

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Basic Block with Translations](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/basic-block-translations-3df23d) | Shows how to implement internationalization (i18n) in a WordPress block using both PHP and JavaScript translations, demonstrating proper setup of translation files and functions. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=static-rendering">static-rendering</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/basic-block-translations-3df23d.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/basic-block-translations-3df23d/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Translation Implementation

1. **JavaScript Translation**

    - Import translation functions
    - Apply translations to strings
    - Handle dynamic content
    - Manage text domains

2. **PHP Translation**
    - Register translation files
    - Load language resources
    - Configure text domains
    - Handle script translations

### Technical Components

1. **JavaScript Side**

    ```javascript
    import { __ } from '@wordpress/i18n';

    // Translation in edit component
    function Edit() {
    	return (
    		<div>
    			<h2>
    				{ __( 'Translatable Title', 'basic-block-translations' ) }
    			</h2>
    			<p>
    				{ __(
    					'This text can be translated',
    					'basic-block-translations'
    				) }
    			</p>
    		</div>
    	);
    }
    ```

2. **PHP Side**
    ```php
    // Register translations for JavaScript
    function setup_translations() {
        wp_set_script_translations(
            'basic-block-translations-editor-script',
            'basic-block-translations',
            plugin_dir_path(__FILE__) . 'languages'
        );
    }
    add_action('init', 'setup_translations');
    ```

### Translation Structure

1. **Language Files**

    ```
    languages/
    ├── basic-block-translations.pot     # Template file
    ├── basic-block-translations-es_ES.po # Spanish translations
    ├── basic-block-translations-es_ES.mo # Compiled Spanish
    └── ...                              # Other languages
    ```

2. **Translation Process**
    - Extract translatable strings
    - Create POT template
    - Create language-specific PO files
    - Compile to MO format

### Best Practices

-   Use translation functions consistently
-   Provide meaningful text domains
-   Include translator comments
-   Maintain context information
-   Keep strings translatable

-   The [`__` function](https://developer.wordpress.org/reference/functions/__/) receives the text and a namespace as parameters
-   At `index.php` we tell WordPress our JavaScript contains translations, using the `wp_set_script_translations()` function.
-   At `languages/` folder there are all the translations files (the source files and the `.mo` ones actually used to apply the translations)

## Related Resources

-   [WordPress i18n Documentation](https://developer.wordpress.org/block-editor/how-to-guides/internationalization/)
-   [Translation Functions](https://developer.wordpress.org/reference/functions/__/)
-   [Script Translation Setup](https://developer.wordpress.org/reference/functions/wp_set_script_translations/)
-   [Language File Management](https://developer.wordpress.org/plugins/internationalization/)
-   [Block Editor i18n](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/)
-   [`__()`](https://developer.wordpress.org/reference/functions/__/)
-   [`wp_set_script_translations()`](https://developer.wordpress.org/reference/functions/wp_set_script_translations/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
