<?php
/**
 * Plugin Name: Block Development Examples - Minimal Block ca6eda
 *
 * @package create-block
 */

/**
 * Register the block.
 */
function minimal_block_ca6eda___register_block() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'minimal_block_ca6eda___register_block' );
