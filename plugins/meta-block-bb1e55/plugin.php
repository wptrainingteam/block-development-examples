<?php
/**
 * Plugin Name:       WP Block Development Examples - Meta Block bb1e55
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
function meta_block_bb1e55__register_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'meta_block_bb1e55__register_block' );

/**
 * Register custom post meta field.
 */
function myguten_register_post_meta() {
	register_post_meta(
		'post',
		'myguten_meta_block_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'myguten_register_post_meta' );
