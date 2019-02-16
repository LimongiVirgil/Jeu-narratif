var story1 = document.querySelector('.image .image__story--v1');
var story2 = document.querySelector('.image .image__story--v2');
var story3 = document.querySelector('.image .image__story--v3');
var button = document.querySelector('.text a');
var text = document.querySelector('.text .text__story')

var index = 0;

setTimeout(function () {
  story1.classList.add('image__story');
  story2.classList.remove('image__story');
}, 3000) 

setTimeout(function () {
  story2.classList.add('image__story');
  story3.classList.remove('image__story');
}, 6000) 

setTimeout(function () {
  text.innerHTML += '<br><br><br>Garde du royaume: Bonjour Messire, le Roi m\'envoie vous quérir pour discuter de votre mission. Veuillez me suivre sans attendre.'
}, 6500)


setTimeout(function () {
  button.classList.remove('display')
}, 8500)