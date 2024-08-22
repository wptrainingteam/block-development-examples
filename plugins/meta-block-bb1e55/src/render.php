<?php
/**
 * Render.php
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-development-examples
 */

global $post;
?>
<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php wp_kses_data( get_post_meta( $post->ID, 'myguten_meta_block_field', true ) ); ?>
</p>
