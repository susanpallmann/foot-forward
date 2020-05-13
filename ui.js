$(document).ready(function() {
  $(".sliding-link").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    $('html,body').animate({scrollTop: $(dest).offset().top},'slow');
  });
  $(".checkbox").click(function() {
    if ($(this).attr("aria-checked") === "true" ) {
      $(this).attr("aria-checked", "false");
    } else {
      $(this).attr("aria-checked", "true");
    }
  });
});
