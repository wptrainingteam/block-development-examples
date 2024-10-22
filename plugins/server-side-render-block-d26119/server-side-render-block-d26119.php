<?php
/**
 * Plugin Name:       Block Development Examples - Server Side Render Block d26119
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           block-development-examples
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function server_side_render_block_d26119__register_block() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'server_side_render_block_d26119__render_block',
		)
	);
}
add_action( 'init', 'server_side_render_block_d26119__register_block' );

/**
 * Renders the block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the block content.
 */
function server_side_render_block_d26119__render_block( $attributes ) {
	$label   = isset( $attributes['label'] ) ? $attributes['label'] : '';
	$message = __( 'Server Side Render Block d26119 – This content is rendered on the server and displayed in the Editor using the ServerSideRender component.', 'block-development-examples' );

	$wrapper_attributes = get_block_wrapper_attributes();

	if ( empty( $label ) ) {
		return sprintf( '<p %s>%s</p>', $wrapper_attributes, esc_html( $message ) );
	}

	return sprintf(
		'<div %s><h2>%s</h2><p>%s</p></div>',
		$wrapper_attributes,
		esc_html( $label ),
		esc_html( $message )
	);
}
