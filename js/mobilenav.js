// HAMBURGLERv2

// function togglescroll() {
//   $('body').on('touchstart', function(e) {
//     if ($('body').hasClass('noscroll')) {
//       e.preventDefault();
//     }
//   });
// }

function togglescroll() {
  $('body').on('touchstart', 'vclick', function(e) {
    // Just add the check: !$(e.target).hasClass('icon')
    if (!$(e.target).hasClass('mobilenav-icon') && $('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  togglescroll()
  $(document).on("click", ".mobilenav-icon", function() {
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
    $(".mobilenav").fadeOut(400);
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});