# Static Block Rendering Implementation

This example demonstrates how to create WordPress blocks that save their content as static HTML in the post content. Unlike dynamic blocks, static blocks store their rendered output directly in the database, making them ideal for content that doesn't need to change between page loads.

Key concepts covered:

-   Static block rendering
-   Content persistence
-   Block attributes handling
-   Save and Edit functions
-   HTML generation and storage

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Block with Static Rendering](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/block-static-rendering-b16608) | Illustrates how to create a block that saves its content as static HTML in the post content, showing the basic pattern for static block rendering. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=static-rendering">static-rendering</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=create-block">create-block</a></code></small> | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/block-static-rendering-b16608.zip "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/block-static-rendering-b16608/_playground/blueprint.json "Click here to access a live demo of this example" ) |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Static Rendering Implementation

1. **Block Registration**

    ```javascript
    import { registerBlockType } from '@wordpress/blocks';
    import { useBlockProps } from '@wordpress/block-editor';

    registerBlockType( 'block-development-examples/static-rendering', {
    	edit: function Edit( { attributes, setAttributes } ) {
    		const blockProps = useBlockProps();
    		return (
    			<div { ...blockProps }>
    				<p>Edit: This content will be saved as static HTML</p>
    			</div>
    		);
    	},
    	// Save function returns the content to be stored
    	save: function Save( { attributes } ) {
    		const blockProps = useBlockProps.save();
    		return (
    			<div { ...blockProps }>
    				<p>Saved: This is the static content</p>
    			</div>
    		);
    	},
    } );
    ```

2. **Block Configuration**
    ```json
    {
    	"apiVersion": 2,
    	"name": "block-development-examples/static-rendering",
    	"title": "Static Rendering Block",
    	"category": "widgets",
    	"icon": "editor-code",
    	"description": "Block with static content rendering.",
    	"supports": {
    		"html": true
    	},
    	"textdomain": "static-rendering",
    	"editorScript": "file:./index.js",
    	"style": "file:./style-index.css"
    }
    ```

### Technical Components

1. **Content Storage**

    - HTML stored in post_content
    - Attributes serialized in HTML comments
    - Content immediately available
    - No server-side processing needed

2. **Block Lifecycle**
    - Edit: User interface in editor
    - Save: Generate static HTML
    - Frontend: Direct HTML output
    - Migration handling when needed

## Related Resources

-   [Static Block Documentation](https://developer.wordpress.org/block-editor/getting-started/fundamentals/#static-or-dynamic-rendering-of-a-block)
-   [Block Save API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/)
-   [Block Validation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#validation)
-   [Block Deprecation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-deprecation/)
-   [Block Attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/juanma-wp/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
