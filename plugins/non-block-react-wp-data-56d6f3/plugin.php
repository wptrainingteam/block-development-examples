<?php
/**
 *
 * Plugin Name:       Block Development Examples - Non Block React WP Data 56d6f3
 * Description:       A non-block example with wp-data
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       non-block-react-wp-data
 *
 * @package           block-development-examples
 */

namespace React_Example;

defined( 'ABSPATH' ) || die();

/**
 * Register the page.
 */
function add_page() {
	add_menu_page(
		'React Example',
		'React Example',
		'read',
		'react-example',
		function () {
			echo '<div id="react-example-wrapper"></div>';
		}
	);
}
add_action( 'admin_menu', __NAMESPACE__ . '\add_page' );

/**
 * Enqueue the script for the page.
 */
function enqueue_scripts() {
	$screen = get_current_screen();
	if ( 'toplevel_page_react-example' !== $screen->id ) {
		return;
	}

	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	if ( ! file_exists( "{$dir}/build/index.asset.php" ) ) {
		return;
	}

	$asset = include "{$dir}/build/index.asset.php";
	wp_enqueue_script(
		'react-example',
		"{$url}/build/index.js",
		$asset['dependencies'],
		$asset['version'],
		true
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );
