<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
   wp_enqueue_style( 'sassified', get_stylesheet_directory_uri().'/assets/css/main.css' );
}

  add_action('wp_enqueue_scripts', 'script_enqueueing');
  function script_enqueueing() {
    wp_enqueue_script('nav-scripting-behaviour', get_stylesheet_directory_uri() . '/main.js', array( 'jquery' ));
  }
  add_action( 'wp_enqueue_scripts', function() {
    wp_dequeue_style( 'shapely-fonts', '//fonts.googleapis.com/css?family=Raleway:100,300,400,500,600,700%7COpen+Sans:400,500,600' );
  },
  99 );

?>