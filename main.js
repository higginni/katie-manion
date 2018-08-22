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
