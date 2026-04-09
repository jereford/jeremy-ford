// HAMBURGLERv2

function togglescroll() {
  $('body').on('click', function(e) {
    if (!$(e.target).closest('.mobilenav-icon').length && $('body').hasClass('noscroll')) {
    }
  });
}

$(document).ready(function() {
  console.log("mobilenav.js loaded - document ready");
  togglescroll()

  $(document).on("click", ".mobilenav-icon", function() {
    console.log("Hamburger clicked!");
    
    $(".mobilenav").fadeToggle(400, function() {
      if ($(".mobilenav").is(":visible")) {
          $(".mobilenav").css("display", "flex");
      }
    });
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    // $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
});

// PUSH ESC KEY TO EXIT
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    console.log("ESC key pressed");
    $(".mobilenav").fadeOut(400, function() {
      $(".mobilenav").css("display", "flex");
    });
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});