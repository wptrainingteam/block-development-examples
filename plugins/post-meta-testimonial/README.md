# Post Meta Testimonial

This example adds a testimonial block that allows users to add and manage testimonial content with custom post metadata in the Block Editor.

> [!NOTE]
> This example is explained step by step in the post [Creating a custom block that stores post meta](https://developer.wordpress.org/news/2023/03/creating-a-custom-block-that-stores-post-meta/)

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Example                                                                                                                   | <span style="display: inline-block; width:250px">Description</span>                                            | Tags                                                                                                                                                                                                                                | Download .zip                                                                                                                                                                                                           | Live Demo                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Post Meta Testimonial](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/post-meta-testimonial) | Shows how to create a testimonial block that uses post meta data to store and display testimonial information. | <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=meta">meta</a></code></small> <small><code><a href="https://WordPress.github.io/block-development-examples/?tags=block">block</a></code></small> | [📦](https://github.com/WordPress/block-development-examples/releases/download/latest/post-meta-testimonial.zip 'Install the plugin on any WordPress site using this zip and activate it to see the example in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/post-meta-testimonial/_playground/blueprint.json 'Click here to access a live demo of this example') |

<!-- @TABLE EXAMPLES END -->

## Overview

This example demonstrates how to create a custom block that manages testimonial content using post metadata. The block allows users to add testimonial-specific information such as the author's name, role, and testimonial content directly within the Block Editor.

The plugin showcases:

-   How to register and use custom post meta fields with blocks
-   Implementation of a custom block with metadata support
-   Integration with the Block Editor's components and controls
-   Best practices for handling and displaying testimonial data

## Related resources

-   [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
-   [Using Post Meta Data](https://developer.wordpress.org/block-editor/how-to-guides/metabox/)
-   [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) documentation
-   [Block Controls](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/Examples#start-guide-for-local-development-with-the-examples)
