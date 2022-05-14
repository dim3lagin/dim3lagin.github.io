$('.multiple-items').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1850,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1650,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 1216,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 1122,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
            breakpoint: 1021,
            settings: {
              slidesToShow: 1.7,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 952,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 856,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 755,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 705,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 652,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false
            }
          },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
          