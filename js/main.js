const searchLink = document.querySelector(".search-link");
const searchBlock = document.querySelector(".header-search");
const searchClose = document.querySelector(".header-search__close");
const burgerIcon = document.querySelector(".burger");
const burgerNav = document.querySelector(".header__nav");
const btnBack = document.querySelector(".not-found__back");

// search
searchLink.addEventListener("click", function () {
    searchBlock.style.display = "block";
});

searchClose.addEventListener("click", function () {
    searchBlock.style.display = "none";
});

// burger
burgerIcon.addEventListener("click", function () {
    burgerIcon.classList.toggle("active");

    if (!burgerIcon.classList.contains("active")) {
        burgerIcon.classList.toggle("not-active");
        burgerNav.classList.remove("menu");

    } else {
        burgerIcon.classList.remove("not-active");
        burgerNav.classList.toggle("menu");
    }
});

// back-up
btnBack.addEventListener("click", function () {
    history.back();
});
