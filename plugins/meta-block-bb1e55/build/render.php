<?php
/**
 * Render.php
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-development-examples
 */

global $post;
$meta_data = get_post_meta( $post->ID, 'myguten_meta_block_field', true );
?>
<blockquote <?php echo get_block_wrapper_attributes(); ?>>
	<p><?php echo esc_html( $meta_data ); ?></p>
</blockquote>

