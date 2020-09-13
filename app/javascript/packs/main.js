var cursor = document.querySelector('.cursor');
cursor.classList.add('is-invisible');

var positioner = document.addEventListener('mousemove', (e) => {
  cursor.classList.remove('is-invisible');

  if (cursor.classList.contains('cursor-small')) {
    cursor.setAttribute(
      'style',
      'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
    );
  } else {
    cursor.setAttribute(
      'style',
      'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;'
    );
  }
});

var cursorLinks = document.querySelectorAll('a');

cursorLinks.forEach((item) => {
  item.addEventListener('pointerover', (e) => {
    cursor.classList.remove('cursor-small');
    cursor.classList.add('cursor-big');
  });
  item.addEventListener('pointerout', (e) => {
    cursor.classList.remove('cursor-big');
    cursor.classList.add('cursor-small');
  });
});

var root = document.documentElement;

colors = ['aquamarine', '#fdbb41', '#0099ff', '#ec6060'];

root.style.setProperty('--underline', colors[randomize(colors.length)]);

function randomize(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
