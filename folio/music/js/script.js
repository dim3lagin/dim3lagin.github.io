$(function () {
  $('.single-item').slick({
    prevArrow: '<button class="slider-btn left" id="prev" type="button" class="btn btn-juliet"> < </button>',
    nextArrow: '<button class="slider-btn right color1" id="next" type="button" class="btn btn-juliet"> > </button>'
  });
  $('.slider').slick({
		arrows:true,
    Infinity: false,
		dots:false,
		slidesToShow:4,
		autoplay:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});