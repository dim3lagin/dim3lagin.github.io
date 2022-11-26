/*Burger action*/
let navToggle = $('#navToggle');
let nav = $('#nav');

navToggle.on('click', function (event) {
    event.preventDefault();

    $("body").toggleClass('show-nav');
    $(this).toggleClass('active');
    nav.toggleClass('nav-burger-inner-active');
});

$(window).on("resize", function () {
    $("body").removeClass('show-nav');
    navToggle.removeClass('active');
    nav.removeClass('nav-burger-inner-active');
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