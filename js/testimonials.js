var currentSlide = 1;

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('testimonialText');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'block'
  console.log(slides, currentSlide)
}

var looper = setInterval(() => showSlide(currentSlide+=1), 7000); // Change slide every 5 seconds

function nextSlide() {
    clearInterval(looper);
    showSlide(currentSlide += 1);
}

function previousSlide() {
    clearInterval(looper);
    showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}