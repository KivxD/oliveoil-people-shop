const navSlide = () => {
const navToggle = document.querySelector("#navToggle");
const menu = document.querySelector("#menu");
const navLinksFadeIn = document.querySelectorAll(".navLinks li");


navToggle.addEventListener('click', () => {
  menu.classList.toggle('translate-x-full')
  navLinksFadeIn.forEach(link => {
    link.classList.toggle('fadeIn');
});

});

}

navSlide()
