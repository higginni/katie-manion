jQuery(document).ready(function($) {
  var navpos = $("#mainnav").offset();
  $(window).scroll("scroll", function() {
    if ($(window).scrollTop() > 0) {
      $("#mainnav").addClass("navbar-fixed-top");
      $("#topnav").removeClass("navbar-fixed-top");
    } else {
      $("#topnav").addClass("navbar-fixed-top");
      $("#mainnav").removeClass("navbar-fixed-top");
    }
  });
});

jQuery(document).ready(function($) {
  var firstImage = $(".img-responsive").offset();
  $(window).scroll("scroll", function() {
    if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1600) {
      $(".img-responsive").addClass("fixed-image");
      $("#topnav").removeClass("fixed-image");
    } else {
      $("#topnav").addClass("fixed-image");
      $(".img-responsive").removeClass("fixed-image");
    }
  });
});
