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

// function break_heading() {
//     var heading1 = $(".sectionHeading .heading_one").text().split("");
//     var heading2 = $(".sectionHeading .heading_two").text().split("");

//     // Clear the existing content
//     $(".heading_one").html("");

//     // Loop through heading1 and wrap each letter in a <span>
//     heading1.forEach(letter => {
//         $(".heading_one").append(`<span>${letter}</span>`);
//     });

//     // Agar aapko heading2 pe bhi same logic apply karna ho
//     $(".heading_two").html("");  // Clear existing content for heading2
//     heading2.forEach(letter => {
//         $(".heading_two").append(`<span>${letter}</span>`);
//     });
// }

// break_heading();