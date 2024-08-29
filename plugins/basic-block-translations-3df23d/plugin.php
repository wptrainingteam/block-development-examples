<?php
/**
 * Plugin Name: Block Development Examples - Basic Block Translations 3df23d
 * Plugin URI: https://github.com/WordPress/block-development-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package block-development-examples
 */

defined( 'ABSPATH' ) || exit;

// For PHP translations → wp i18n make-pot . languages/block-development-examples.pot --slug=block-development-examples --domain=block-development-examples --exclude=node_modules,src.
// For JS translations → wp i18n make-json languages/ --no-purge.

/**
 * Load all translations for our plugin from the MO file.
 */
function basic_block_3df23d___load_textdomain() {
	load_plugin_textdomain( 'block-development-examples', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'basic_block_3df23d___load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function basic_block_3df23d___register_block() {

	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( __DIR__ . '/build' );

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'block-development-examples-basic-block', 'block-development-examples' );
	}
}

add_action( 'init', 'basic_block_3df23d___register_block' );
