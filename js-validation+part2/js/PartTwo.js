window.onload = init;
let clickCount = 0;
let charCount = 0;
let kpCount = 0;

function init(){
  buttons = document.querySelectorAll('button');
  for(button of buttons) {
    button.addEventListener('click', buttonClick)
  }
  let inputs = document.querySelectorAll("input");
  for(input of inputs){
    input.addEventListener(onkeydown, formKeyPress(e))
  }

}


var buttonClick = function() {
  console.log('mouseClick = ' + clickCount);
  clickCount++;
}

var formKeyPress = (e) => {
  let char = String.fromCharCode(e.keyCode);
  console.log('keypress = ' + char);
  kpCount++;
  if(e.key.length === 1){
    charCount++;
  } 
}

var revealStats = () => {
  let hidden = 
