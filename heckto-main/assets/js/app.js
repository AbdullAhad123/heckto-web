$(window).on('load resize', function () {
    const el1 = $(".big_wrapper_right");
    const el2 = $(".big_wrapper_left");
    const windowSize = $(window).width(); // Corrected here

    if (windowSize >= 2200) {
        el1.fadeIn();
        el2.fadeIn();
    } else {
        el1.fadeOut();
        el2.fadeOut();
    }
});