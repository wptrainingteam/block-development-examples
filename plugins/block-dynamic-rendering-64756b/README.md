# Dynamic Block Rendering Implementation

This example demonstrates how to create WordPress blocks that render their content dynamically on the server side. Unlike static blocks, dynamic blocks generate their output at runtime, making them ideal for content that needs to be updated based on the latest data or server-side logic.

Key concepts covered:

-   Dynamic block rendering
-   Server-side PHP rendering
-   Block attribute handling
-   WordPress render callback
-   Real-time content generation

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Basic Block with Dynamic Rendering](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/block-dynamic-rendering-64756b) | Demonstrates how to create a block that renders its content dynamically on the server side rather than saving static content in the post content. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=dynamic-rendering">dynamic-rendering</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=create-block">create-block</a></code></small> | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/block-dynamic-rendering-64756b.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/block-dynamic-rendering-64756b/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Dynamic Rendering Implementation

1. **Block Registration**

    ```javascript
    import { registerBlockType } from '@wordpress/blocks';
    import { useBlockProps } from '@wordpress/block-editor';

    registerBlockType( 'block-development-examples/dynamic-rendering', {
    	edit: function Edit( { attributes, setAttributes } ) {
    		const blockProps = useBlockProps();
    		return (
    			<div { ...blockProps }>
    				<p>Editor View: Content will be rendered dynamically</p>
    			</div>
    		);
    	},
    	// No save function needed - rendering handled by PHP
    	save: function () {
    		return null;
    	},
    } );
    ```

2. **PHP Render Callback**

Render Callback is defined via [a `render.php` file](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/) as defined on `block.json`

### Technical Components

1. **Block Configuration**

    ```json
    {
    	"apiVersion": 2,
    	"name": "block-development-examples/dynamic-rendering",
    	"title": "Dynamic Rendering Block",
    	"category": "widgets",
    	"icon": "update",
    	"description": "Block with dynamic server-side rendering.",
    	"supports": {
    		"html": false
    	},
    	"textdomain": "dynamic-rendering",
    	"editorScript": "file:./index.js",
    	"render": "file:./render.php"
    }
    ```

2. **Block Registration Process**

```php
function block_dynamic_rendering_64756b___register_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'block_dynamic_rendering_64756b___register_block' );
```

## Related Resources

-   [Fundamentals of Block Development](https://developer.wordpress.org/block-editor/getting-started/fundamentals/)

-   [Dynamic Block Documentation](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
-   [Server-Side Rendering](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-attributes-and-server-side-rendering/)
-   [Block Attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)
-   [WordPress Security](https://developer.wordpress.org/plugins/security/)
-   [Block Registration](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/juanma-wp/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples) >
