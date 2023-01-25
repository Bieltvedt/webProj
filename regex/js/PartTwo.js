window.onload = init;
let clickCount = 0;
let charCount = 0;
let kpCount = 0;
let date;

function init(){
  buttons = document.querySelectorAll('button');
  for(button of buttons) {
    button.addEventListener('click', buttonClick)
  }

  let inputs = document.querySelectorAll("input");
  for(input of inputs){
    input.addEventListener('keydown', formKeyPress)
  }

  let forms = document.querySelectorAll("form");
  for(form of forms){
    form.addEventListener('submit', revealStats)
  }

  date = new Date();
}


let buttonClick = function() {
  console.log('mouseClick = ' + clickCount);
  clickCount++;
}

let formKeyPress = (e) => {
  let char = String.fromCharCode(e.keyCode);
  console.log('keypress = ' + char);
  kpCount++;
  if(e.key.length === 1){
    charCount++;
  } 
}

let revealStats = (e) => {
  e.preventDefault();
  clickCount++;


  let hidden = document.querySelector(".hidden");
  let children = hidden.children;
  let test = new Date();
  let time = formatTime(test - date);

  children[0].innerHTML = "Num. of mouse clicks: " + clickCount;
  children[1].innerHTML = "Time on page: " + time;
  children[2].innerHTML = "Key presses: " + kpCount;
  children[3].innerHTML = "Chars typed: " + charCount;

  

  // children[0].appendChild(document.createTextNode("Num. of mouse clicks: " + clickCount));
  // children[1].appendChild(document.createTextNode("Time on page: " + time));
  // children[2].appendChild(document.createTextNode("Key presses: " + kpCount));
  // children[3].appendChild(document.createTextNode("Chars typed: " + charCount));

  hidden.style.display = "block";
  reset();
}

let formatTime = (millis) => {
  let min = Math.floor(millis / 60000);
  let sec = ((millis % 60000) / 1000).toFixed(0);
  return min + ":" + sec;
}

let reset = () => {
  date = new Date();
  clickCount = 0;
  charCount = 0;
  kpCount = 0;
}
