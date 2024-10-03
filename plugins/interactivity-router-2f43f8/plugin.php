<?php
/**
 * Plugin Name:       Block Development Examples - interactivity-router 2f43f8
 * Description:       Example of how interactivity router works
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       03-block-interactive
 *
 * @package           block-development-examples
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_block_2f43f8() {
	register_block_type(
		__DIR__ . '/build'
	);
}
add_action( 'init', 'register_block_2f43f8' );
