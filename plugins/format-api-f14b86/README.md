# Custom Text Formatting with WordPress Format API

This example demonstrates how to extend WordPress's rich text editing capabilities by implementing custom text formats using the Format API. Learn how to add custom formatting options to the block editor's toolbar, enabling users to apply special text styling and markup.

Key concepts covered:

-   Format API implementation
-   Custom toolbar button creation
-   Rich text formatting controls
-   Text format registration
-   Format application and removal

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Format API](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/format-api-f14b86) | Demonstrates how to use the WordPress Format API to add custom text formatting options to the editor. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=no-block">no-block</a></code></small> | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/format-api-f14b86.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/format-api-f14b86/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Format Implementation

1. **Format Registration**

    - Register format with `registerFormatType`
    - Define format name and tag
    - Specify format attributes
    - Configure toolbar controls

2. **Toolbar Integration**
    - Custom toolbar button component
    - Format toggle functionality
    - Active state management
    - Icon and label configuration

### Technical Components

1. **Format Definition**

    ```javascript
    registerFormatType( 'block-development-examples/format', {
    	title: 'Custom Format',
    	tagName: 'span',
    	className: 'custom-format',
    	edit: ( { isActive, value, onChange } ) => {
    		// Toolbar button implementation
    	},
    } );
    ```

2. **Rich Text Integration**

    ```javascript
    import { RichTextToolbarButton } from '@wordpress/block-editor';
    import { toggleFormat } from '@wordpress/rich-text';

    // Format toggle implementation
    const onToggle = () => {
    	onChange(
    		toggleFormat( value, {
    			type: 'block-development-examples/format',
    		} )
    	);
    };
    ```

### Best Practices

-   Follow WordPress format naming conventions
-   Implement proper format toggling
-   Handle format conflicts appropriately
-   Consider accessibility in format application
-   Maintain clean and semantic markup

## Related Resources

-   [Format API Documentation](https://developer.wordpress.org/block-editor/reference-guides/richtext/)
-   [Rich Text Component](https://developer.wordpress.org/block-editor/reference-guides/components/rich-text/)
-   [Format Type Registration](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-rich-text/#registerformattype)
-   [Toolbar Components](https://developer.wordpress.org/block-editor/reference-guides/components/toolbar-button/)
-   [Text Formatting Guide](https://developer.wordpress.org/block-editor/how-to-guides/format-api/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/juanma-wp/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
