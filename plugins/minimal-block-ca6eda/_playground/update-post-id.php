<?php
// phpcs:ignoreFile

require_once 'wp-load.php';
global $wpdb;
$custom_post_id = 10;

/* Get the latest post ID */
$latest_post_id = $wpdb->get_var( "SELECT ID FROM $wpdb->posts ORDER BY ID DESC LIMIT 1" );

if ($latest_post_id) {
	/* Update the latest post ID to 1 */
	$update_result = $wpdb->query( $wpdb->prepare( "UPDATE $wpdb->posts SET ID = " . $custom_post_id . ' WHERE ID = %d', $latest_post_id ) );

	if ($update_result !== false) {
		echo 'Post ID updated successfully.<br>';

		/* Reset the auto-increment value to 1 */
		$reset_auto_increment = $wpdb->query("ALTER TABLE $wpdb->posts AUTO_INCREMENT = " . " $custom_post_id + 1);

        if ($reset_auto_increment !== false) {
            echo "Auto - increment value reset successfully . ';
        } else {
            echo 'Failed to reset auto - increment value . ';
        }
    } else {
        echo 'Failed to update post ID . ';
    }
} else {
    echo 'No posts found . ";
}
?>
