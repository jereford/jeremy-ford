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
    
    $(document).on("click", ".mobilenav-icon", function() {
      // If the menu is hidden, set to flex immediately then fade in
      if ($(".mobilenav").is(":hidden")) {
        $(".mobilenav").css("display", "flex").hide().fadeIn(400);
      } else {
        // If it's already open, fade it out
        $(".mobilenav").fadeOut(400);
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
    $(".mobilenav").fadeOut(400);
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    // $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});