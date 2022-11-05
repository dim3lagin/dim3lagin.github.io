/*Burger action*/

let navToggle = $('#navToggle');
let nav = $('#nav');

navToggle.on('click', function (event) {
    event.preventDefault();

    $("body").toggleClass('show-nav');
    $(this).toggleClass('activee');
    nav.toggleClass('nav-active');
});

$(window).on("resize", function () {
    $("body").removeClass('show-nav');
    navToggle.removeClass('activee');
    nav.removeClass('nav-active');
});

/*Cars Changes*/

const tabsBtn = document.querySelectorAll(".tab-btn");
const tabsItem = document.querySelectorAll(".tabs");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        });

        tabsItem.forEach(function (item) {
            item.classList.remove('flex-active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('flex-active');
    });
});

let header = $("#header");
let headerH = header.innerHeight();
let scrollTop = $(window).scrollTop();

/* Smooth Scroll*/

$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    $("body").removeClass('show-nav');
    navToggle.removeClass('active');
    nav.removeClass('show');

    $("html, body").animate({
        scrollTop: scrollElPos - headerH
    }, 500)
});

/* ScrollSpy*/
let windowH = $(window).height();
scrollSpy(scrollTop);

$(window).on("scroll", function () {
    scrollTop = $(this).scrollTop();
    scrollSpy(scrollTop);
});

function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function () {
        let $this = $(this);
        let sectionId = $this.data('scrollspy');
        let sectionOffset = $this.offset().top;
        sectionOffset = sectionOffset - (windowH * 0.55555);

        if (scrollTop >= sectionOffset) {
            $('#nav [data-scroll]').removeClass('active-nav-link');
            $('#nav [data-scroll="' + sectionId + '"]').addClass('active-nav-link');
        }

        if (scrollTop == 0) {
            $('#nav [data-scroll]').removeClass('active-nav-link');
        }
    });
}