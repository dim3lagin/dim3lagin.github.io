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




/*Cars Changes*/
const tabsBtn = document.querySelectorAll(".tab-btn");
const tabsItem = document.querySelectorAll(".tabs");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('active-item');
        });

        tabsItem.forEach(function (item) {
            item.classList.remove('flex-active');
        });

        currentBtn.classList.add('active-item');
        currentTab.classList.add('flex-active');
    });
});

/*Close/open answers*/
const answBtn = document.querySelectorAll(".title-js");
const answItem = document.querySelectorAll(".answer-js");

answBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentAnswBtn = document.querySelector(".answer");
        let currentAnswId = currentAnswBtn.getAttribute("data-open");
        let currentAnswTab = document.querySelector(currentAnswId);

        answBtn.forEach(function (currentAnswBtn) {
            currentAnswBtn.classList.remove('answer-active');
        });

        currentAnswBtn.classList.add('answer-active');
    });
});


    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();



    /* Smooth Scroll to sections
    =====================================*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('nav-show');

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });




    /* ScrollSpy
    =====================================*/
    let windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.5);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }

