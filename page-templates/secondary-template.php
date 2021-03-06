<?php
/**
 * Template Name: Custom Template
 *
 * Displays the Home page with Parallax effects.
 *
 */
?>

<?php get_header(); ?>
<?php
if ( ! function_exists( 'dynamic_sidebar' ) || ! dynamic_sidebar( 'sidebar-home' ) ) :
?>
  <div class="container p24 wp-caption-text">
    <h5><?php echo esc_html__( 'This is the "Home Sidebar Section", add some widgets to it to change it.', 'shapely' ); ?></h5>
  </<div>
<?php endif; ?>


<?php get_footer(); ?>
