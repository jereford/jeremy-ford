// HAMBURGLERv2

function togglescroll() {
  $('body').on('touchstart', 'vclick', function(e) {
    if (!$(e.target).hasClass('mobilenav-icon') && $('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  console.log("mobilenav.js loaded - document ready");
  togglescroll()

  $(document).on("click", ".mobilenav-icon", function(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log("Hamburger clicked!");
    console.log(".mobilenav element exists:", $(".mobilenav").length);
    console.log(".mobilenav display before:", $(".mobilenav").css('display'));
    
    $(".mobilenav").stop(true, false).fadeToggle(400);
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
    
    console.log(".mobilenav display after:", $(".mobilenav").css('display'));
  });
});

// PUSH ESC KEY TO EXIT
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    console.log("ESC key pressed");
    $(".mobilenav").fadeOut(400);
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});