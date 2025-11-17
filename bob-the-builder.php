<?php
/**
 * Plugin Name: Bob The Builder
 * Description: A plugin to demonstrate new WordPress build system.
 * Version: 1.0.0
 * Author: Iqbal Hossain
 * Author URI: https://profile.wordpress.org/utsavladani/
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: bob-the-builder
 */

namespace BobTheBuilder;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

include_once __DIR__ . '/build/index.php';

function route_test_init() {
    // Register Route-Test Homepage (WP Admin integrated page)
    $homepage_url = admin_url( 'admin.php?page=route-test-homepage-wp-admin&p=' . urlencode( '/' ) );
    add_menu_page(
        'Route-Test Homepage',
        'Route-Test Home',
        'manage_options',
        $homepage_url,
        '',
        'dashicons-admin-home',
        20
    );

    // Register Route-Test Service Page (WP Admin integrated page)
    $service_url = admin_url( 'admin.php?page=route-test-servicepage-wp-admin&p=' . urlencode( '/service' ) );
    add_menu_page(
        'Route-Test Service Page',
        'Route-Test Services',
        'manage_options',
        $service_url,
        '',
        'dashicons-admin-tools',
        21
    );
}
add_action( 'init', __NAMESPACE__ . '\route_test_init' );

function route_test_enqueue_scripts() {
    wp_enqueue_script( 'route-test-logger' );
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\route_test_enqueue_scripts' );
