const menu = document.getElementById("nav-list");
const main = document.getElementById("main");
const eduBtn = document.getElementById("educ-btn");
const workBtn = document.getElementById("work-btn");
const eduContainer = document.getElementById("educ-container");
const workContainer = document.getElementById("work-container");

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("tog-h");
    main.classList.toggle("d-none");
}

function toggleQual() {
    eduBtn.classList.toggle("active");
    workBtn.classList.toggle("active");
    eduContainer.classList.toggle("d-none");
    workContainer.classList.toggle("d-none");
}