$(function first () {
	$('.single-item').slick({
		prevArrow: '<button class="slider-btn left" id="prev" type="button" class="btn btn-juliet"> < </button>',
		nextArrow: '<button class="slider-btn right color1" id="next" type="button" class="btn btn-juliet"> > </button>'
	});

	/*Burger on mobile*/

	let navToggle = $('#navToggle');
	let nav = $('#nav');

	navToggle.on('click', function (event) {
		event.preventDefault();

		$("body").toggleClass('show-nav');
		$(this).toggleClass('active');
		nav.toggleClass('show');
	});

	$(window).on("resize", function () {
		$("body").removeClass('show-nav');
		navToggle.removeClass('active');
		nav.removeClass('show');
	});

	$('.slider').slick({
		arrows: true,
		infinity: false,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		responsive: [{
				breakpoint: 1067,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 803,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	
    /* Modal*/

	$('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show-modal');

        setTimeout(function() {
            $(modal).find('.modal-inner	').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);
    });


    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    });


    $('.modal-inner').on('click', function(event) {
        event.stopPropagation();
    });


    function modalClose(modal) {
        modal.find('.modal-inner').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('body-noscroll');
            modal.removeClass('show-modal');
        }, 200);
    }
	
});

function readmore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }