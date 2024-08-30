<?php
/**
 * Plugin Name:       Block Development Examples - Post Meta Modal 2502fb
 * Requires at least: 6.3
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
 * Enqueue the Editor scripts and styles.
 */
function post_meta_modal_2502fb_enqueue_scripts_styles() {
	global $pagenow, $typenow;
	$post_meta_modal_2502fb_script_assets = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Check if we are on the Post Editor and the post type is "post".
	if (
		'post.php' === $pagenow &&
		'post' === $typenow &&
		file_exists( $post_meta_modal_2502fb_script_assets )
	) {
		$assets = include $post_meta_modal_2502fb_script_assets;
		wp_enqueue_script(
			'post_meta_modal_2502fb_scripts',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

		wp_enqueue_style(
			'post_meta_modal_2502fb_styles',
			plugin_dir_url( __FILE__ ) . 'build/index.css',
			array(),
			$assets['version']
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'post_meta_modal_2502fb_enqueue_scripts_styles' );

/**
 * Register custom post meta fields.
 */
function post_meta_modal_2502fb_register_post_meta() {
	register_post_meta(
		'post',
		'post_meta_modal_2502fb_text_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
	register_post_meta(
		'post',
		'post_meta_modal_2502fb_select_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
	register_post_meta(
		'post',
		'post_meta_modal_2502fb_radio_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'post_meta_modal_2502fb_register_post_meta' );
