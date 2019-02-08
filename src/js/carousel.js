let left = document.querySelector('.slider__arrow.slider__arrow--left');
var right = document.querySelector('.slider__arrow.slider__arrow--right');
var images = document.querySelectorAll('.image img');
var buttons = document.querySelectorAll('.image .image__button')
var index = 0;

left.classList.add('display');

right.addEventListener('click', function() {
  if (index >= 2) {
    index = 2;
  };
  images[index].classList.add('image__story');
  buttons[index].classList.add('display');
  index++;
  images[index].classList.remove('image__story');
  buttons[index].classList.remove('display');
  if (index >= 3) {
    right.classList.add('display');
  } else {
    left.classList.remove('display');
  }
});

left.addEventListener('click', function() {
  if (index <= 0) {
    index = 1;
  }
  images[index].classList.add('image__story');
  buttons[index].classList.add('display');
  index--;
  images[index].classList.remove('image__story');
  buttons[index].classList.remove('display');
  if (index > 0) {
    right.classList.remove('display');
  } else {
    left.classList.add('display')
  }
});


