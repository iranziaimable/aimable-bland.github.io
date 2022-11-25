const nav = document.querySelector("nav");

window.addEventListener("scrolled", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
