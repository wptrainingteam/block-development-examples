<?php
/**
 * Plugin Name:       Block Development Examples - Plugin Sidebar 9ee4a6
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

add_action(
	'enqueue_block_editor_assets',
	function () {
		$plugin_sidebar_9ee4a6_file = plugin_dir_path( __FILE__ ) . 'build/plugin-sidebar-9ee4a6.asset.php';

		if ( file_exists( $plugin_sidebar_9ee4a6_file ) ) {
			$assets = include $plugin_sidebar_9ee4a6_file;
			wp_enqueue_script(
				'plugin-sidebar-9ee4a6',
				plugin_dir_url( __FILE__ ) . 'build/plugin-sidebar-9ee4a6.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);

add_action(
	'init',
	function () {
		/**
		 * Register post meta field.
		 */
		register_post_meta(
			'post',
			'sidebar_plugin_meta_block_field',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);
	}
);
