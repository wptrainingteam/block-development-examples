<?php
/**
 * Plugin Name: Block Development Examples - Editable Block 1b8c51
 * Plugin URI: https://github.com/WordPress/block-development-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package block-development-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
function editable_block_1b8c51__load_textdomain() {
	load_plugin_textdomain( 'block-development-examples', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'editable_block_1b8c51__load_textdomain' );


/**
 * Automatically registers block types by scanning the build/blocks folder.
 *
 * This function searches for JSON files within each subfolder and registers
 * them as block types. It is triggered on WordPress 'init' action.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function editable_block_1b8c51__register_block() {
	if ( file_exists( __DIR__ . '/build/blocks/' ) ) {
			$block_json_files = glob( __DIR__ . '/build/blocks/*/block.json' );
		foreach ( $block_json_files as $filename ) {
				$block_folder = dirname( $filename );
				register_block_type( $block_folder );
		}
	}
	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'block-development-examples-editable-block', 'block-development-examples' );
	}
}
add_action( 'init', 'editable_block_1b8c51__register_block' );
