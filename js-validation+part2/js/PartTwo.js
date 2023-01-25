// let clickCount = 0;
// let charCount = 0;
// let kpCount = 0;
// let date;

// function initTwo(){
//   buttons = document.querySelectorAll('button');
//   for(button of buttons) {
//     button.addEventListener('click', buttonClick)
//   }

//   let inputs = document.querySelectorAll("input");
//   for(input of inputs){
//     input.addEventListener(onkeydown, formKeyPress(e))
//   }

//   date = new Date();

// }


// var buttonClick = function() {
//   console.log('mouseClick = ' + clickCount);
//   clickCount++;
// }

// var formKeyPress = (e) => {
//   let char = String.fromCharCode(e.keyCode);
//   console.log('keypress = ' + char);
//   kpCount++;
//   if(e.key.length === 1){
//     charCount++;
//   } 
// }

// var revealStats = () => {
//   let hidden = document.querySelector(".hidden");
//   let children = hidden.children;
//   let time = (new Date() - date) / (1000 * 60);

//   children[0].appendChild(document.createTextNode("Num. of mouse clicks: " + clickCount));
//   children[1].appendChild(document.createTextNode("Time on page: " + time));
//   children[2].appendChild(document.createTextNode("Key presses: " + kpCount));
//   children[3].appendChild(document.createTextNode("Chars typed: " + charCount));

//   hidden.style.display = "block";

// }
