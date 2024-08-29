<?php
/**
 * Plugin Name:       Block Development Examples - Format API f14b86
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       format-api
 *
 * @package format-api-f14b86
 */

add_action(
	'enqueue_block_editor_assets',
	function () {
		$format_api_file = plugin_dir_path( __FILE__ ) . 'build/format-api-f14b86.asset.php';

		if ( file_exists( $format_api_file ) ) {
			$assets = include $format_api_file;
			wp_enqueue_script(
				'format-api-f14b86',
				plugin_dir_url( __FILE__ ) . '/build/format-api-f14b86.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
