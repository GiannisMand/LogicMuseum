let currentSlideIndex = 0; // current slide index
let previousSlideIndex = null; // previous slide index
const slides = document.getElementsByClassName("slide"); // get all slides
const dots = document.getElementsByClassName("dot"); // get all dots

// error checking
if (slides.length <= 0) throw new Error("No slides found");
if (dots.length <= 0) throw new Error("No dots found");
if (slides.length !== dots.length)
  throw new Error("Number of slides and dots must be equal");

const slidesLength = slides.length;
const slideShowInterval = 5000; // Changing a slide each 5 seconds

let sliderInterval = null;

initializeSlideshow();

function initializeSlideshow() {
  let firstSlide = document.querySelector(".slide");
  firstSlide.style.display = "block";
  updateSlides();
  startSlideShowTimer();
}
function jumpToSlide(slideIndex) {
  clearInterval(sliderInterval);
  previousSlideIndex = currentSlideIndex;
  currentSlideIndex = slideIndex;

  if(currentSlideIndex < 0) currentSlideIndex = slidesLength - 1;
  else if (currentSlideIndex >= slidesLength) currentSlideIndex = 0;

  updateSlides();
  startSlideShowTimer();
}
/**
 *
 * @param {number} moveBy - 1 or -1. 1 to move to next slide, -1 to move to previous slide
 */
function moveSlider(moveBy) {
  clearInterval(sliderInterval);
  previousSlideIndex = currentSlideIndex;
  currentSlideIndex += moveBy;

  if (currentSlideIndex < 0) currentSlideIndex = slidesLength - 1;
  else if (currentSlideIndex >= slidesLength) currentSlideIndex = 0; 

  updateSlides();
  startSlideShowTimer();
}

function updateSlides() {

  slides.item(previousSlideIndex).style.display = "none"; // hide current slide
  dots.item(previousSlideIndex).className = "dot"; // remove active class from previously selected dot
  if (currentSlideIndex >= slidesLength) currentSlideIndex = 0; // if current slide index is greater than total number of slides, reset to 0
  slides.item(currentSlideIndex).style.display = "block"; // show next slide
  dots.item(currentSlideIndex).className = "dot active"; // add active class to next dot
}

function startSlideShowTimer() {
  sliderInterval = setInterval(() => {
    previousSlideIndex = currentSlideIndex;
    currentSlideIndex++;
    updateSlides();
  }, slideShowInterval);
}





