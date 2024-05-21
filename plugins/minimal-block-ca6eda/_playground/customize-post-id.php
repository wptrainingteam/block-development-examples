<?php
// phpcs:ignoreFile
/*
 * Plugin Name:       customize-post-id
 * Description:       Customize last post ID
 * Version:           0.1.0
 */


function set_last_post_id_to_custom_post_id() {
    
    global $wpdb;

    /* Get the latest post ID */
    $latest_post_id = $wpdb->get_var( "SELECT ID FROM $wpdb->posts ORDER BY ID DESC LIMIT 1" );

    if ($latest_post_id) {
        /* Update the latest post ID to 1 */
        $update_result = $wpdb->query( $wpdb->prepare( "UPDATE $wpdb->posts SET ID = 1 WHERE ID = %d", $latest_post_id ) );

        if ($update_result !== false) {
            echo "Post ID updated successfully.<br>";
        } else {
            echo "Failed to update post ID";
        }
    } else {
        echo "No posts found";
    }

}
add_action( "init", "set_last_post_id_to_custom_post_id", 0 );


?>
