<?php
/**
 * Plugin Name:       WP Block Development Examples - Slotfill 2fb190
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
		$slotfill_2fb190_index_file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';

		if ( file_exists( $slotfill_2fb190_index_file ) ) {
			$assets = include $slotfill_2fb190_index_file;
			wp_enqueue_script(
				'slotfill-2fb190',
				plugin_dir_url( __FILE__ ) . '/build/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}

		$individual_example_add_on = plugin_dir_path( __FILE__ ) . '/individual-example-add-on.php';
		if ( file_exists( $individual_example_add_on ) ) {
			require_once $individual_example_add_on;
			set_individual_example();
		}
	}
);

add_action(
	'init',
	function () {
		// Register the post meta field the meta box will save to.
		register_post_meta(
			'post',
			'example_meta_field',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);
	}
);
