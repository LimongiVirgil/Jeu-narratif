var story1 = document.querySelector('.image .image__story--chateau1');
var story2 = document.querySelector('.image .image__story--chateau2');
var story3 = document.querySelector('.image .image__story--chateau3');
var story4 = document.querySelector('.image .image__story--chateau4');
var story5 = document.querySelector('.image .image__story--chateau5');
var story6 = document.querySelector('.image .image__story--chateau6');
var reset = true;

story3.classList.add('display');
story4.classList.add('display');
story5.classList.add('display');
story6.classList.add('display');

setInterval(function() {
  if (story1.className === 'image__story--chateau1 image__story') {
    story1.classList.remove('image__story');
    story2.classList.add('image__story');
  } else {
     story2.classList.remove('image__story');
     story1.classList.add('image__story');
  }
}, 500);

setTimeout(function () {
  story1.classList.add('display');
  story2.classList.add('display');
  story2.classList.add('image__story');
  story3.classList.add('image__story');
  story4.classList.remove('display');
  story3.classList.remove('display');
  setInterval(function () {
    if (story3.className === 'image__story--chateau3 image__story') {
      story3.classList.remove('image__story');
      story4.classList.add('image__story');
    } else {
       story4.classList.remove('image__story');
       story3.classList.add('image__story');
    }
  },500);
}, 8000);

setTimeout(function () {
  story3.classList.add('display');
  story4.classList.add('display');
  story3.classList.add('image__story');
  story5.classList.add('image__story');
  story5.classList.remove('display');
  story6.classList.remove('display');
  setInterval(function () {
    if (story5.className === 'image__story--chateau5 image__story') {
      story5.classList.remove('image__story');
      story6.classList.add('image__story');
    } else {
       story6.classList.remove('image__story');
       story5.classList.add('image__story');
    }
  },500);
}, 16000);