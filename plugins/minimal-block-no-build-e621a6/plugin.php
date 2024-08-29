<?php
/**
 * Plugin Name: Block Development Examples - Minimal Block No Build e621a6
 * Description: This is a plugin demonstrating how to register a minimal block for the Gutenberg editor.
 * Version: 1.0
 * Author: Block Development Example
 *
 * @package create-block
 */

/**
 * Register the block
 */
function minimal_block_no_build_e621a6___register_block() {
	register_block_type( __DIR__ );
}

add_action( 'init', 'minimal_block_no_build_e621a6___register_block' );
