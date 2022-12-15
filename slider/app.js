const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;
  console.log(slides);
//   console.log(slides - 1);
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgBody();
  setActiveSlide();
});
leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgBody();
  setActiveSlide();
});

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
setBgBody();

function setActiveSlide() {
  slides.forEach((sld) => {
    // console.log(sld);
    sld.classList.remove("active");
    slides[activeSlide].classList.add("active");
  });
}
setActiveSlide();
