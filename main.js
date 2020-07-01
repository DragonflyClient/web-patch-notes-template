/* Selectors */

const nav = document.querySelector('.nav');
const ham = document.querySelector('.ham-wrapper');
const socials = document.querySelector('.socials');

nav.classList.remove('nav-active');
ham.classList.remove('ham-active');

/* Eventlisteners */
ham.addEventListener('click', toggleNav);

/* Functions */
function toggleNav() {
  nav.classList.toggle('nav-active');
  ham.classList.toggle('ham-active');
  socials.classList.toggle('socials-active');
  event.preventDefault();
}
function closeMenu(e) {
  nav.classList.toggle('nav-active');
  ham.classList.toggle('ham-active');
  e.preventDefault();
}

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 },  400)
  closeMenu()
}

// Change direction of logo anchor
window.addEventListener("scroll", function () {
  const logoImg = document.querySelector("#logo a")
  if (document.documentElement.scrollTop > 0) {
    logoImg.setAttribute("href", "#")
  } else {
    logoImg.setAttribute("href", "https://inceptioncloud.net/dragonfly")
  }
})