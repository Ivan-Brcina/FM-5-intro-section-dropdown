const labels = document.getElementsByClassName("navbar-label");
const navbarItem = document.getElementsByClassName("navbar-item");
const arrows = document.getElementsByClassName("arrow-down");
const burger = document.getElementsByClassName("burger");
const navbarMobile = document.querySelector(".navbar-menu-mobile");
const black = document.querySelector(".black");

console.log(navbarItem);

for (let i = 0; i < burger.length; i++) {
  burger[i].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    navbarMobile.classList.toggle("navbar-active");
    black.classList.toggle("navbar-active");
  });
}

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    navbarItem[i].classList.toggle("dropdown-active");
  });
}
