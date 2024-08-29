<?php
/**
 * Plugin Name:       Block Development Examples - Data Basics 59c8f8
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
 * Create a new admin page.
 */
function my_admin_menu() {
	// Create a new admin page for our app.
	add_menu_page(
		__( 'My custom Gutenberg app', 'block-development-examples' ),
		__( 'My custom Gutenberg app', 'block-development-examples' ),
		'manage_options',
		'my-custom-gutenberg-app',
		function () {
			echo '
			<h2>Pages</h2>
			<div id="my-custom-gutenberg-app"></div>
		';
		},
		'dashicons-schedule',
		3
	);
}

add_action( 'admin_menu', 'my_admin_menu' );


/**
 * Load the admin script.
 *
 * @param string $hook The hook name of the page.
 */
function load_custom_wp_admin_scripts( $hook ) {
	// Load only on ?page=my-custom-gutenberg-app.
	if ( 'toplevel_page_my-custom-gutenberg-app' !== $hook ) {
		return;
	}

	// Load the required WordPress packages.

	// Automatically load imported dependencies and assets version.
	$asset_file = include plugin_dir_path( __FILE__ ) . '/build/index.asset.php';

	// Enqueue CSS dependencies.
	foreach ( $asset_file['dependencies'] as $style ) {
		wp_enqueue_style( $style );
	}

	// Load our app.js.
	wp_register_script(
		'my-custom-gutenberg-app',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
	wp_enqueue_script( 'my-custom-gutenberg-app' );

	// Load our style.css.
	wp_register_style(
		'my-custom-gutenberg-app',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		$asset_file['version']
	);
	wp_enqueue_style( 'my-custom-gutenberg-app' );
}

add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_scripts' );
