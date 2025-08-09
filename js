const heading = document.querySelector("h1");
const body = document.querySelector("body");
const btnHeadingColor = document.querySelector("#change-heading-color");
const btnToggleBackground = document.querySelector("#toggle-background");
btnHeadingColor.addEventListener("click", () => {
  heading.style.color = "blue";
});
btnToggleBackground.addEventListener("click", () => {
  if (body.style.backgroundColor === "lightblue") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "lightblue";
  }
});
