<?php
/**
 * Render.php
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package block-development-examples
 */

?>

<?php
/**
 * The wp_kses_post function is used to ensure any HTML that is not allowed in a post will be escaped.
 *
 * @see https://developer.wordpress.org/reference/functions/wp_kses_post/
 * @see https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/#escaping-securing-output
 */
?>

<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php esc_html_e( 'Block with Dynamic Rendering – hello!!!', 'block-development-examples' ); ?>
</p>
