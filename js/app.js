let defaultPosition = 0;
let defaultSolid = 0;
const btnLeft = document.querySelector(".prev");
const btnRight = document.querySelector(".next");
const slider = document.querySelector(".slider-container");
const slideItem = document.querySelectorAll(".slider-item");
if (defaultPosition === 0) {
  btnLeft.style.visibility = "hidden";
}
btnRight.addEventListener("click", () => {
  defaultPosition++;
  slider.style.transform = `translateX(-${defaultPosition * 100}%)`;
  if (defaultPosition > 0) {
    btnLeft.style.visibility = "visible";
  }
  if (slideItem.length - 1 <= defaultPosition) {
    btnRight.style.visibility = "hidden";
    return;
  }
});
btnLeft.addEventListener("click", () => {
  defaultPosition--;
  slider.style.transform = `translateX(-${defaultPosition * 100}%)`;
  if (defaultPosition >= 0) {
    btnRight.style.visibility = "visible";
  }
  if (defaultPosition === 0) {
    btnLeft.style.visibility = "hidden";
    return;
  }
});
