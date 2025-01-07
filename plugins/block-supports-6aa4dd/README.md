# Block Supports Implementation

This example demonstrates how to leverage WordPress block supports to enhance your blocks with standard WordPress features. Block supports provide a declarative way to add common functionality like alignment controls, color settings, and typography options without writing custom code.

Key concepts covered:

-   Block supports configuration in `block.json`
-   Integration with WordPress core features
-   Automatic UI controls generation
-   Standard block behaviors implementation
-   Property handling in Edit and Save components

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                            | <span style="display: inline-block; width:250px">Description</span>                                                      | Tags                                                                                                                                                                                                                                              | Download .zip                                                                                                                                                                                                           | Live Demo                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Block Supports](https://github.com/juanma-wp/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) | Showcases how to use WordPress block supports to add standard features like alignment, colors, and typography to blocks. | <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=supports">supports</a></code></small> <small><code><a href="https://juanma-wp.github.io/block-development-examples/?tags=featured">featured</a></code></small> | [📦](https://github.com/juanma-wp/block-development-examples/releases/download/latest/block-supports-6aa4dd.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/block-development-examples/trunk/plugins/block-supports-6aa4dd/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Block Supports Configuration

1. **Core Support Features**

    - `align`: Controls block alignment options
    - `color`: Enables background and text color settings
    - `typography`: Provides font size and other text controls
    - `spacing`: Allows margin and padding adjustments

2. **Implementation Details**
    - Supports defined in `block.json` metadata
    - Properties automatically added via `useBlockProps`
    - Generated UI controls in block sidebar
    - Consistent behavior in editor and frontend

### Technical Implementation

1. **Block Registration**

    ```json
    {
    	"supports": {
    		"align": true,
    		"color": {
    			"background": true,
    			"text": true
    		},
    		"typography": {
    			"fontSize": true
    		}
    	}
    }
    ```

2. **Component Integration**
    - `useBlockProps` handles support properties
    - Automatic class generation
    - Proper attribute management
    - Consistent rendering between editor and frontend

## Related Resources

-   [Block API: Supports Documentation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/)
-   [Block Editor Handbook - Block Supports](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-supports-in-static-blocks/)
-   [`useBlockProps` Hook Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops)
-   [WordPress Core Styles](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/)
-   [Block Alignment Guide](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-alignment/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/juanma-wp/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
