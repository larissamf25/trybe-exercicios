// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", function(e) {
  e.preventDefault();
})

INPUT_CHECKBOX.addEventListener("click", function(e) {
  e.preventDefault();
})

INPUT_TEXT.addEventListener("keypress", function(e) {
  if (e.key !== "a") {
    e.preventDefault();
  }
})