<?php
/**
 * Plugin Name: Block Development Examples - Interactive Blocks 99def1
 * Plugin URI:  https://github.com/wptrainingteam/interactive-blocks-demos/
 * Description: A plugin to show different approaches of creating interactive blocks with Gutenberg.
 * Version:     0.0.1
 * Author:      Juanma Garrido
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: block-development-examples
 * Requires at least: 5.8
 * Requires PHP: 5.6
 *
 * @package block-development-examples
 */

/**
 * Register the demos.
 */
function interactive_blocks_demos_99def1__auto_register_block_types() {
	if ( file_exists( __DIR__ . '/build/' ) ) {
			$block_json_files = glob( __DIR__ . '/build/*/block.json' );
		foreach ( $block_json_files as $filename ) {
				$block_folder = dirname( $filename );
				register_block_type( $block_folder );
		}
	}

		wp_register_script(
			'AlpineJS',
			'https://unpkg.com/alpinejs@3.9.6/dist/cdn.min.js',
			array(),
			'3.9.6',
			true // Load it in the footer.
		);
}
add_action( 'init', 'interactive_blocks_demos_99def1__auto_register_block_types' );

/* https://developer.wordpress.org/reference/hooks/render_block_this-name/ */
add_filter(
	'render_block_block-development-examples/counter-jquery-99def1',
	function ( $content ) {
		wp_enqueue_script( 'jquery' );
		return $content;
	}
);

add_filter(
	'render_block_block-development-examples/counter-alpine-99def1',
	function ( $content ) {
		wp_enqueue_script( 'AlpineJS' );
		return $content;
	}
);
