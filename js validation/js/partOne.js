window.onload = init;


function init() {
    console.log("test");
    const req = ["name", "email", "username", "password", "country", "zip", "sex", "language"];
    const signup = document.getElementById("signup-form");
    signup.addEventListener("submit", (event) => {
        
        event.preventDefault();
        
        let pcValid = vpc(signup.elements["zip"]);
        let pwValid = vpw(signup.elements["password"]);
        let nmValid = vnm(signup.elements["name"]);
        let emValid = vem(signup.elements["email"]);
        let unValid = vun(signup.elements["username"]);

        let reqValid = true;
        for(n of req){
            reqValid = reqValid && required(signup.elements[n]);
        }

        let valid = reqValid && pcValid && pwValid && nmValid && emValid && unValid;
        if(valid) {signup.submit();}
        if(!valid){
            alert("Unable to submit form");
        }

    });
}


function vpc(pc){       
    let val = pc.value;
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'Q', 'W', 'X', 'Z']

    pc.style.color = "#645CAA";

    if (val.length != 6) return false;
    for(let i = 0; i < 4; i++){
        if (numbers.indexOf(val.charAt(i)) === -1) {
            pc.style.color = "#FF6961";
            return false;
        }
    }
    for(let i = 4; i < 6;i++){
        if (chars.indexOf(val.charAt(i)) === -1) {
            pc.style.color = "#FF6961";
            return false;
        }
    }
    
    return true;
}

function vpw(pw) {      //password
    let val = pw.value;

    var us = false;
    pw.style.color = "#645CAA";

    if ((val.includes('!') || val.includes('@') || val.includes('#') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('(') || val.includes(')') || val.includes('-') || val.includes('_') || val.includes('=') || val.includes('+') || val.includes('[') || val.includes(']') || val.includes('{') || val.includes('}') || val.includes(';') || val.includes(':') || val.includes('"') || val.includes('<') || val.includes(',') || val.includes('>') || val.includes('.') || val.includes('/') || val.includes('?') || val.includes('!')) && ( val.includes('1') ||  val.includes('2') ||  val.includes('3') ||  val.includes('4') ||  val.includes('5') ||  val.includes('6') ||  val.includes('7') ||  val.includes('8') ||  val.includes('9') ||  val.includes('0'))
    && (val.includes('A') || val.includes('B') || val.includes('C') || val.includes('D') || val.includes('E') || val.includes('F') || val.includes('G') || val.includes('H') || val.includes('I') || val.includes('J') || val.includes('K') || val.includes('L') || val.includes('M') || val.includes('N') || val.includes('O') || val.includes('P') || val.includes('R') || val.includes('S') || val.includes('T') || val.includes('U') || val.includes('V') || val.includes('Y') || val.includes('Z') || val.includes('X') || val.includes('Y') || val.includes('Z')) && (val.includes('a') || val.includes('b') || val.includes('c') || val.includes('d') || val.includes('e') || val.includes('f') || val.includes('g') || val.includes('h') || val.includes('i') || val.includes('j') || val.includes('k') || val.includes('l') || val.includes('m') || val.includes('n') || val.includes('o') || val.includes('p') || val.includes('r') || val.includes('s') || val.includes('t') || val.includes('u') || val.includes('v') || val.includes('y') || val.includes('z') || val.includes('x') || val.includes('y') || val.includes('z'))) {
        pw.style.color = "#645CAA";
        us = true;
    }else {
        pw.style.color = "#FF6961";
    }

    if (val.length < 14) {
        pw.style.color = "#FF6961";
        us = false;
    }

    return us;
}

function vnm(nm) {      //name
    let val = nm.value;
    

    nm.style.color = "#645CAA";
    if (val.includes('!') || val.includes('@') || val.includes('#') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('(') || val.includes(')') || val.includes('-') || val.includes('_') || val.includes('=') || val.includes('+') || val.includes('[') || val.includes(']') || val.includes('{') || val.includes('}') || val.includes(';') || val.includes(':') || val.includes('"') || val.includes('<') || val.includes(',') || val.includes('>') || val.includes('.') || val.includes('/') || val.includes('?') || val.includes('!')) {
        nm.style.color = "#FF6961";
        nm.style.color = "#FF6961";
        return false;
    }
    if ( val.includes('1') ||  val.includes('2') ||  val.includes('3') ||  val.includes('4') ||  val.includes('5') ||  val.includes('6') ||  val.includes('7') ||  val.includes('8') ||  val.includes('9') ||  val.includes('0')) {
        nm.style.color = "#FF6961";
        nm.style.color = "#FF6961";
        return false; 
    }
    return true;
}

function vem(em){       //email 
    let val = em.value;

    let att = val.indexOf("@");
    let dot = val.indexOf(".");
    em.style.color = "645CAA";
    
    if (dot <= att + 1) {
        em.style.color = "#FF6961";
        return false;
    }

    if (dot.length - 1) {
        em.style.color = "#FF6961";
        return false; 
    }

    if (att < 2) {
        em.style.color = "#FF6961";
        return false;
    }

    return true;
}

function vun(un){       //username
    let val = un.value;
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'Q', 'W', 'X', 'Z']

    un.style.color = "#645CAA";
    if (chars.indexOf(val.charAt(0)) === -1) {
        un.style.color = "#FF6961";
        return false;
    }
    if (val.length <5 || val.length>12) return false; 
    if (numbers.indexOf(val.charAt(val.length - 1)) === -1) {
        un.style.color = "#FF6961";
        return false;
    }
    return true;
}

function required(el) {
    if(el.value === "") {
        el.style.color = "#FF6961";
        return false;
    }
    else {
        el.style.color = "645CAA";
        return true;
    }
}