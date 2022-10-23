const menu = document.getElementById("nav-list");
const main = document.getElementById("main");

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("tog-h");
    main.classList.toggle("d-none");
}