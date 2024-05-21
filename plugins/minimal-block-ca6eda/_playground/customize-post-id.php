<?php
// phpcs:ignoreFile
/*
 * Plugin Name:       customize-post-id
 * Description:       Customize last post ID
 * Version:           0.1.0
 */


register_activation_hook( __FILE__ , function () {
    
    global $wpdb;

    /* Get the latest post ID */
    $latest_post_id = $wpdb->get_var( "SELECT ID FROM $wpdb->posts ORDER BY ID DESC LIMIT 1" );

    if ($latest_post_id) {
        /* Update the latest post ID to 1 */
        $update_result = $wpdb->query( $wpdb->prepare( "UPDATE $wpdb->posts SET ID = 10 WHERE ID = %d", $latest_post_id ) );

        if ($update_result !== false) {
            echo "Post ID updated successfully.<br>";

            /* Reset the auto-increment value to $custom_post_id + 1 */
            $reset_auto_increment = $wpdb->query("ALTER TABLE $wpdb->posts AUTO_INCREMENT = 11");

            if ($reset_auto_increment !== false) {
                echo "Auto - increment value reset successfully";
            } else {
                echo "Failed to reset auto - increment value";
            }
        } else {
            echo "Failed to update post ID";
        }
    } else {
        echo "No posts found";
    }

});

