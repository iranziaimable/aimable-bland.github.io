const nav = document.querySelector("nav");

window.addEventListener("scrolled", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function addArticle() {
  let tbl = document.getElementById("myArticle");
  let row = tbl.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  cell1.innerHTML = "Bonus";
  cell2.innerHTML = "bonne anne";
  cell3.innerHTML = "21-12-2022";
  cell4.innerHTML = "No image yet";
}
