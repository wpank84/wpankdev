var i = 0;
var txt = "Hi, I'm Will.";
var speed = 120;
var welcome = document.getElementById('welcome');
var intro = document.getElementById('intro');
var skillIcons = document.getElementById('skill-icons');

function typeWriter() {
  if (i < txt.length) {
    welcome.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (txt.length == welcome.textContent.length) {
    intro.classList.add('fade-in');
    intro.classList.remove('is-invisible');
    skillIcons.classList.add('fade-in');
    skillIcons.classList.remove('is-invisible');
  }
}
typeWriter();
