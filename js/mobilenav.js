// HAMBURGLERv2

function togglescroll() {
  $('body').on('touchstart click', function(e) {
    if (!$(e.target).hasClass('mobilenav-icon') && $('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  console.log("mobilenav.js loaded - document ready");
  togglescroll()

  $(document).on("click", ".mobilenav-icon", function() {

    console.log("Hamburger clicked!");
    console.log(".mobilenav element exists:", $(".mobilenav").length);
    
    $(".mobilenav").fadeToggle(400);
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
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