console.log("ВНИМАНИЕ ДАННЫЙ САЙТ НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ САЙТОМ ЯНДЕКС МУЗЫКА!!! Я ЕГО СДЕЛАЛ СУГОБО ДЛЯ ПРОВЕРКИ СВОИХ ПОЗНАНИЙ В ВЕРСТКЕ!!! Всем добра");

function like(){
    document.getElementById('number').innerHTML = '♡ 1';
  }

  

  $('.multiple-items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 529,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1
        }
      },
    
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      },
      
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.containerr').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 529,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1
        }
      },
    
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      },
      
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });