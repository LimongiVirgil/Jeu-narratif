var story1 = document.querySelector('.image .image__story--v1');
var story2 = document.querySelector('.image .image__story--v2');

setInterval(function() {
  if (story1.className === 'image__story--v1 image__story') {
    story1.classList.remove('image__story');
    story2.classList.add('image__story');
  } else {
    story2.classList.remove('image__story');
    story1.classList.add('image__story');
  }
}, 500);

