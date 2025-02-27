<?php
/**
 * Render.php
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-development-examples
 */

global $post;
$testimonial = get_post_meta( $post->ID, 'testimonial', true );
$author_name = $attributes['authorName'];
$author_url  = $attributes['authorURL'];
?>
<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
<blockquote <?php echo get_block_wrapper_attributes(); ?>>
	<p><?php echo esc_html( $testimonial ); ?></p>
	<cite>
		<span><?php echo esc_html( $author_name ); ?></span>
		<br />
		<span>
			<a href="<?php echo esc_url( $author_url ); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html( $author_url ); ?></a>
		</span>
	</cite>
</blockquote>
