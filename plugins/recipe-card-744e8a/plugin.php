<?php
/**
 * Plugin Name:       Block Development Examples - Recipe Card 744e8a
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
function recipe_card_744e8a__register_block() {
	register_block_type( __DIR__ . '/build' );

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'recipe_card_744e8a', 'block-development-examples' );
	}
}
add_action( 'init', 'recipe_card_744e8a__register_block' );

/**
 * Load all translations for our plugin from the MO file.
 */
function recipe_card_744e8a__load_textdomain() {
	load_plugin_textdomain( 'block-development-examples', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'recipe_card_744e8a__load_textdomain' );
