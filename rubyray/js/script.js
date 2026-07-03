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


/*Filters*/
/*
const checkboxes = document.querySelectorAll('.right input[type="checkbox"]');
const albums = document.querySelectorAll('#itemsList .album');

function applyFilter() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value.toLowerCase());

  albums.forEach(album => {
    const category = album.dataset.category.toLowerCase();
    if (selected.includes(category)) {
      album.classList.remove('hidden');
    } else {
      album.classList.add('hidden');
    }
  });
}

checkboxes.forEach(cb => cb.addEventListener('change', applyFilter));

applyFilter();*/