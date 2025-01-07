# Dynamic Block Implementation

This example demonstrates how to create a dynamic block in WordPress that renders content on the server side using PHP. Dynamic blocks are essential when dealing with real-time data, complex calculations, or content that needs to be generated at the time of page load rather than being stored as static HTML.

Key concepts covered:

-   Server-side rendering with PHP
-   Dynamic data fetching and processing
-   Block attribute handling
-   PHP render callback implementation via `render.php`

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                          | <span style="display: inline-block; width:250px">Description</span>                                                      | Tags                                                                                                                                       | Download .zip                                                                                                                                                                                                          | Live Demo                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dynamic Block](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/dynamic-block-b0bce7) | Shows how to create blocks that render content dynamically using PHP, including data fetching and server-side rendering. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=dynamic-rendering">dynamic-rendering</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/dynamic-block-b0bce7.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/dynamic-block-b0bce7/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

### Dynamic Rendering Process

1. **Block Registration**

    - Register block with `register_block_type`
    - Define attributes in `block.json`
    - Specify PHP render callback
    - Handle editor-side components

2. **Server-Side Implementation**
    - PHP render callback function
    - Dynamic data fetching
    - HTML generation
    - Security considerations

### Technical Components

1. **JavaScript Side**

    ```javascript
    // Edit component focuses on UI and data collection
    edit: function( { attributes, setAttributes } ) {
        return (
            <div { ...useBlockProps() }>
                // Editor interface elements
            </div>
        );
    }
    // No save function needed - rendering handled by PHP
    save: function() {
        return null;
    }
    ```

2. **PHP Side** via `render.php`

Render Callback is defined via [a `render.php` file](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/) as defined on `block.json`

```php
<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
    <?php
    ...
    echo wp_kses_post( $attributes['message'] . ' | ' . get_bloginfo( 'name' ) );
    ...
    ?>
 </p>
```

## Related Resources

-   [Dynamic Block Documentation](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
-   [Server-Side Rendering](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-attributes-and-server-side-rendering/)
-   [Block Attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)
-   [Data Sanitization/Escaping](https://developer.wordpress.org/plugins/security/securing-output/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)

```

```
