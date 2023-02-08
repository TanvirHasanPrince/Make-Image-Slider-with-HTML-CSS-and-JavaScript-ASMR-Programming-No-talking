const body = document.body;

const slides = document.querySelectorAll(".slide");
const navigateLeft = document.getElementById("left");
const navigateRight = document.getElementById("right");

let activeSlide = 1;

navigateRight.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBackground();
  setActiveSlide();
});

navigateLeft.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

    setBackground();
    setActiveSlide();

});

const setBackground = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

setBackground();

const setActiveSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
};
