<?php
/**
 * Plugin Name:       Block Development Examples - Quiz 1835fa
 * Version:           1.0.0
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Description:       Plugin created for the WCEU 2023 workshop: Building Interactive Blocks, a step-by-step workshop
 * Author:            Luis Herranz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           block-development-examples
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Automatically registers block types by scanning the build/blocks folder.
 *
 * This function searches for JSON files within each subfolder and registers
 * them as block types. It is triggered on WordPress 'init' action.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function interactivity_api_quiz_1835fa__register_block() {
	if ( file_exists( __DIR__ . '/build/blocks/' ) ) {
			$block_json_files = glob( __DIR__ . '/build/blocks/*/block.json' );
		foreach ( $block_json_files as $filename ) {
				$block_folder = dirname( $filename );
				register_block_type( $block_folder );
		}
	}
}
add_action( 'init', 'interactivity_api_quiz_1835fa__register_block' );
