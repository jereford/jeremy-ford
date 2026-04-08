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
  // We attach to the 'document' so it works even after the header is AJAX-loaded.
  // .off('click') ensures we don't bind the same function multiple times.
  $(document).off('click', '.mobilenav-icon').on('click', '.mobilenav-icon', function(e) {
      // Prevent the browser from treating this as a link or a double-tap
      e.preventDefault();
      e.stopPropagation();

      $(".mobilenav").fadeToggle(400);
      $("body").toggleClass("noscroll");
      
      // Toggle animation classes
      $(".top-menu").toggleClass("top-animate");
      $(".mid-menu").toggleClass("mid-animate");
      $(".bottom-menu").toggleClass("bottom-animate");
  });

  // PUSH ESC KEY TO EXIT
  $(document).keydown(function(e) {
      if (e.keyCode == 27 && $(".mobilenav").is(":visible")) {
          $(".mobilenav").fadeOut(400);
          $("body").removeClass("noscroll");
          $(".top-menu, .mid-menu, .bottom-menu").removeClass("top-animate mid-animate bottom-animate");
      }
  });
});