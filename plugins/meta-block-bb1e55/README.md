# WordPress Post Meta Integration with Blocks

This example demonstrates how to create blocks that interact with WordPress post meta data, allowing you to store and retrieve custom data associated with posts. Learn how to integrate your blocks with WordPress's metadata system for persistent data storage.

Key concepts covered:

-   Post meta registration and handling
-   Meta field integration with blocks
-   Data persistence strategies
-   WordPress REST API meta endpoints
-   Block attributes and meta synchronization

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                    | <span style="display: inline-block; width:250px">Description</span>                                                        | Tags                                                                                                             | Download .zip                                                                                                                                                                                                       | Live Demo                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Meta Block](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/meta-block-bb1e55) | Shows how to create blocks that read and save data to post meta, demonstrating integration with WordPress metadata system. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=meta">meta</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/meta-block-bb1e55.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/meta-block-bb1e55/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Meta Integration

1. **Meta Registration**

    - Register meta fields with `register_post_meta`
    - Configure meta field permissions
    - Set up REST API access
    - Define meta field schema

2. **Block Implementation**
    - Meta data retrieval and storage
    - Block attribute synchronization
    - Real-time meta updates
    - Error handling and validation

### Technical Components

1. **Meta Registration**

    ```php
    register_post_meta('post', 'example_meta_field', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        }
    ]);
    ```

2. **Block Integration**

    ```javascript
    import { useSelect, useDispatch } from '@wordpress/data';
    import { useEntityProp } from '@wordpress/core-data';

    // Meta data handling in block
    const [ metaValue, setMetaValue ] = useEntityProp(
    	'postType',
    	'post',
    	'example_meta_field'
    );
    ```

## Related Resources

-   [Post Meta Registration](https://developer.wordpress.org/reference/functions/register_post_meta/)
-   [Block Editor Data](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/)
-   [REST API Handbook](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/)
-   [Meta Box API](https://developer.wordpress.org/plugins/metadata/custom-meta-boxes/)
-   [Data Module Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
