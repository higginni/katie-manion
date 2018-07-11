jQuery(document).ready(function($) {
  var navpos = $('#mainnav').offset();
  $(window).scroll('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('#mainnav').addClass('navbar-fixed-top');
      $('#topnav').removeClass('navbar-fixed-top');
    } else {
      $('#topnav').addClass('navbar-fixed-top');
      $('#mainnav').removeClass('navbar-fixed-top');
    }
  });
});
jQuery(document).on("load", function($) {
  function fade(pageLoad) {
    var windowBottom = $(window).scrollTop() + $(window).innerHeight();
    var min = 0.3;
    var max = 0.7;
    var threshold = 0.01;
    $("section").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity") <= min + threshold || pageLoad) {
          console.log("YEEEEE");
          $(this).fadeTo(500, max);
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") >= max - threshold || pageLoad) {
          console.log("noooooo");
          $(this).fadeTo(500, min);
        }
      }
    });
  }
  fade(true); //fade elements on page-load
  $(window).scroll(function() { fade(false); }); //fade elements on scroll
});