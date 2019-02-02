var story1 = document.querySelector('.image .image__story--chateau1');
var story2 = document.querySelector('.image .image__story--chateau2');
var reset = 0;

while (reset != 1) {
  setInterval(function() {
    if (story1.className === 'image__story--chateau1 image__story') {
      story1.classList.remove('image__story');
      story2.classList.add('image__story');
    } else {
      story2.classList.remove('image__story');
      story1.classList.add('image__story');
    }
  }, 500);
}

setTimeout(function () {
  reset++;
}, 10000)