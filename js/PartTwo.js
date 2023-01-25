
window.onload = init;

function init(){
  buttons = document.querySelectorAll('button');
  
}

var clickCount = 0;
var mouseClicked = function() {
  console.log('mouseClick = ' + clickCount);
  clickCount++;
}

// ------------------------

var buttonClick = document.querySelector