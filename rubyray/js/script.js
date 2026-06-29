/*Burger action*/
let navToggle = $('#navToggle');
let nav = $('#nav');

navToggle.on('click', function (event) {
    event.preventDefault();

    $("body").toggleClass('show-nav');
    $(this).toggleClass('activee');
    nav.toggleClass('nav-show');
});

$(window).on("resize", function () {
    $("body").removeClass('show-nav');
    navToggle.removeClass('activee');
    nav.removeClass('nav-show');
});





$('.multiple-items').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});