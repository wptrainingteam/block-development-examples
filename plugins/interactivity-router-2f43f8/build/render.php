<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-development-examples
 */

$base_url = get_site_url();
?>
<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive="router-2f43f8"
	data-wp-router-region="region-example-2f43f8"
>

		<p><em>Displaying region "region-example-2f43f8" from <a data-wp-bind--href="state.urlRegionDisplay" data-wp-text="state.urlRegionDisplay"></a></em></p>
		<div class="box-content">
			<?php echo wp_kses_post( $content ); ?>
		</div>
		<p><small><em>Click "Next" (or "Prev") to get more info from other pages (without a page reload)</em></small></p>
		<nav>
			<?php if ( isset( $attributes['prev'] ) ) : ?>
				<a
					data-wp-on--click="actions.navigate"
					href="<?php echo esc_url( $base_url . esc_attr( $attributes['prev'] ) ); ?>"
				>&lt; Prev</a>
			<?php endif; ?>
			<?php if ( isset( $attributes['next'] ) ) : ?>
				<a
					data-wp-on--click="actions.navigate"
					href="<?php echo esc_url( $base_url . esc_attr( $attributes['next'] ) ); ?>"
				>Next &gt;</a>
			<?php endif; ?>
		</nav>

		<div class="debug-info">
			<p>block (region in display) attributes: <code style="text-align: left;">
				<?php echo wp_json_encode( $attributes ); ?>
			</code></p>
			<p>state.urlRegionDisplay: <code data-wp-text="state.urlRegionDisplay"></code></p>
		</div>




</div>
