window.onload = init;


function init() {
    console.log("test");
    const required = ["name", "email", "username", "password", "country", "zip", "sex", "language"];
    const signup = document.getElementById("signup-form");
    signup.addEventListener("submit", (event) => {
        
        event.preventDefault();
        
        let pcValid = vpc(signup.elements["zip"]);
        let pwValid = vpw(signup.elements["password"]);
        let nmValid = vnm(signup.elements["name"]);
        let emValid = vem(signup.elements["email"]);
        let unValid = vun(signup.elements["username"]);

        let reqValid = true;
        for(n of required){
            reqValid = reqValid && required(signup.elements[n]);
        }

        let valid = reqValid && pcValid && pwValid && nmValid && emValid && unValid;
        if(valid){
            signup.submit()
        }else {
            alert("Unable to submit form")
        }

    });
}


function vpc(pc){       //postcode DOESNT WORK FOR SOME REASON? 
    let val = pc.value;

    if (val.length != 6) return false;
    if (val.charAt(0) != ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) return false;
    if (val.charAt(1) != ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) return false;
    if (val.charAt(2) != ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) return false;
    if (val.charAt(3) != ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) return false;
    if (val.charAt(4) != ('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'R'||'S'||'T'||'Q'||'W'||'X'||'Z')) return false;
    if (val.charAt(5) != ('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'R'||'S'||'T'||'Q'||'W'||'X'||'Z')) return false;
    // if(/^[0-9]{4}[A-Z]{2}$/.test(val)){
    //     pc.style.color = "#645CAA";
    //     return true;
    // }else {
    //     pc.style.color = "#FF6961";
    //     return false;
    //     alert("please use a valid nl. postcode")
    // }
}

function vpw(pw) {      //password
    let val = pw.value;

    var us = false;

    if ((val.includes('!') || val.includes('@') || val.includes('#') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('(') || val.includes(')') || val.includes('-') || val.includes('_') || val.includes('=') || val.includes('+') || val.includes('[') || val.includes(']') || val.includes('{') || val.includes('}') || val.includes(';') || val.includes(':') || val.includes('"') || val.includes('<') || val.includes(',') || val.includes('>') || val.includes('.') || val.includes('/') || val.includes('?') || val.includes('!')) && ( val.includes('1') ||  val.includes('2') ||  val.includes('3') ||  val.includes('4') ||  val.includes('5') ||  val.includes('6') ||  val.includes('7') ||  val.includes('8') ||  val.includes('9') ||  val.includes('0'))
    && (val.includes('A') || val.includes('B') || val.includes('C') || val.includes('D') || val.includes('E') || val.includes('F') || val.includes('G') || val.includes('H') || val.includes('I') || val.includes('J') || val.includes('K') || val.includes('L') || val.includes('M') || val.includes('N') || val.includes('O') || val.includes('P') || val.includes('R') || val.includes('S') || val.includes('T') || val.includes('U') || val.includes('V') || val.includes('Y') || val.includes('Z') || val.includes('X') || val.includes('Y') || val.includes('Z')) && (val.includes('a') || val.includes('b') || val.includes('c') || val.includes('d') || val.includes('e') || val.includes('f') || val.includes('g') || val.includes('h') || val.includes('i') || val.includes('j') || val.includes('k') || val.includes('l') || val.includes('m') || val.includes('n') || val.includes('o') || val.includes('p') || val.includes('r') || val.includes('s') || val.includes('t') || val.includes('u') || val.includes('v') || val.includes('y') || val.includes('z') || val.includes('x') || val.includes('y') || val.includes('z'))) {
        us = true;
    }

    if (val.length < 14) {
        us = false;
    }

    return us;

    // if(val.length > 12 && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/.test(val)){
    //     pw.style.color = "#645CAA";
    //     return true;
    // }else {
    //     pw.style.color = "#FF6961";
    //     return false;
    //     alert()
    // }
}

function vnm(nm) {      //name
    let val = nm.value;

    if (val.includes('!') || val.includes('@') || val.includes('#') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('(') || val.includes(')') || val.includes('-') || val.includes('_') || val.includes('=') || val.includes('+') || val.includes('[') || val.includes(']') || val.includes('{') || val.includes('}') || val.includes(';') || val.includes(':') || val.includes('"') || val.includes('<') || val.includes(',') || val.includes('>') || val.includes('.') || val.includes('/') || val.includes('?') || val.includes('!')) return false;
    if ( val.includes('1') ||  val.includes('2') ||  val.includes('3') ||  val.includes('4') ||  val.includes('5') ||  val.includes('6') ||  val.includes('7') ||  val.includes('8') ||  val.includes('9') ||  val.includes('0')) return false; 

    // if(/[A-z]+/.test(val)){
    //     pw.style.color = "#645CAA";
    //     return true;
    // }else {
    //     pw.style.color = "#FF6961";
    //     return false;
    // }
}

function vem(em){       //email 
    let val = em.value;

    let att = em.indexOf("@");
    let dot = em.indexOf(".");
    
    if (dot <= att + 1) return false;

    if (dot.em.length - 1) return false; 

    if (at < 2) return false;

    // if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)){
    //     pw.style.color = "#645CAA";
    //     return true;
    // }else {
    //     pw.style.color = "#FF6961";
    //     return false;
    // }
}

function vun(un){       //username
    let val = un.value;

    if (val.charAt(0) != ('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'R'||'S'||'T'||'Q'||'W'||'X'||'Z')) return false;
    if (val.length <5 || val.length>12) return false; 
    if ((val.charAt(val.length - 1)) != ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) return false;


    // if(val.length > 5 && val.length && /^[A-Z].*?([0-9]|[-._!`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])$/.test(val)){
    //     pw.style.color = "#645CAA";
    //     return true;
    // }else {
    //     pw.style.color = "#FF6961";
    //     return false;
    // }
}

function required(el) {
    if(el === "") return false;
    else return true;
}