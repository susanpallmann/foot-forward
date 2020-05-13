$(document).ready(function() {
  $(".sliding-link").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    $('html,body').animate({scrollTop: $(dest).offset().top},'slow');
  });
  $(".checkbox").click(function() {
    if ($(this).attr("aria-checked") === "true" ) {
      $(this).attr("aria-checked", "false");
      updateBigfoot(-1);
    } else {
      $(this).attr("aria-checked", "true");
      updateBigfoot(1);
    }
  });
  $("#hamburger-menu").click(function() {
    if ($(this).attr("aria-checked") === "true" ) {
      $(this).attr("aria-checked", "false");
    } else {
      $(this).attr("aria-checked", "true");
    }
  });
});
function updateBigfoot(num) {
  var change = num;
  var current = parseInt($(".happy-meter img").attr("score"));
  var update = current + change;
  $(".happy-meter img").attr("src", "images/bigfoot-happy-" + update + ".svg");
  $(".happy-meter img").attr("score", update);
}
