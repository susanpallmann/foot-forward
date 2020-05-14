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
            closeMenu();
        } else {
            $(this).attr("aria-checked", "true");
            openMenu();
        }
    });
    $("#post-header ul li a").click(function() {
        $("#hamburger-menu").attr("aria-checked", "false");
        closeMenu();
    });
    $("#logo").click(function() {
        $("#hamburger-menu").attr("aria-checked", "false");
        closeMenu();
    });
});
function updateBigfoot(num) {
    var change = num;
    var current = parseInt($(".happy-meter img").attr("score"));
    var update = current + change;
    $(".happy-meter img").attr("src", "images/bigfoot-happy-" + update + ".svg");
    $(".happy-meter img").attr("score", update);
}
function openMenu() {
    $("body").css("overflow", "hidden");
    $("#post-header").css("height", "100%");
}
function closeMenu() {
    $("body").css("overflow", "initial");
    $("#post-header").css("height", "0");
}
// Listens for user scroll
$(window).scroll(function () {
    // Sets timeout for scroll to see if the user has finished scrolling
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
        determineScrollLocation();
        //Scroll timer value
    }, 100));
});
function getScrollPosition() {
    var scrollPosition = $(window).scrollTop();
    return scrollPosition;
}
function determineScrollLocation() {
    var currentScroll = getScrollPosition();
    var sectionOne = $('#section-1').offset().top;
    var sectionTwo = $('#section-2').offset().top;
    var sectionThree = $('#section-3').offset().top;
    if (currentScroll > sectionOne) {
        if (currentScroll > sectionTwo) {
            if (currentScroll > sectionThree) {
                updateNavBlocks(3);
            }
            updateNavBlocks(2);
        }
        updateNavBlocks(1);
    } else {
        updateNavBlocks(0);
    }
}
function updateNavBlocks(section) {
    var num = section;
    if (num === 0) {
        $('#scroll p').attr('expanded','false');
    } else {
        $('#scroll p').attr('expanded','false');
        $('page-' + num).attr('expanded','true');
    }
}
/* Test */
