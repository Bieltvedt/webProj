//initializing all our variables, and attaching to init to onload
window.onload = init;
let clickCount = 0;
let charCount = 0;
let kpCount = 0;
let date;

//attaches all event handleing functions to their respective elements. Also initializes our "clock"
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

//handles button click, increments counter
let buttonClick = function() {
  console.log('mouseClick = ' + clickCount);
  clickCount++;
}

//handles keypress, increments keypress counter, if the key typed is a charecter -> icrement charcount
let formKeyPress = (e) => {
  let char = String.fromCharCode(e.keyCode);
  console.log('keypress = ' + char);
  kpCount++;
  if(e.key.length === 1){
    charCount++;
  } 
}

//reveals the statistics for this "session"
let revealStats = (e) => {
  e.preventDefault();
  //submitting the form doesnt trigger buttonClick(), even though submitting is a "button"
  clickCount++;


  //insert stats into hidden <p>'s in hidden div
  let hidden = document.querySelector(".hidden");
  let children = hidden.children;
  let test = new Date();
  let time = formatTime(test - date);
  children[0].innerHTML = "Num. of mouse clicks: " + clickCount;
  children[1].innerHTML = "Time on page: " + time;
  children[2].innerHTML = "Key presses: " + kpCount;
  children[3].innerHTML = "Chars typed: " + charCount;

  
  //unhide 
  hidden.style.display = "block";
  reset();
}

//converts milliseconds into human readable format
let formatTime = (millis) => {
  let min = Math.floor(millis / 60000);
  let sec = ((millis % 60000) / 1000).toFixed(0);
  return min + ":" + sec;
}

//resets counters and "clock"
let reset = () => {
  date = new Date();
  clickCount = 0;
  charCount = 0;
  kpCount = 0;
}
