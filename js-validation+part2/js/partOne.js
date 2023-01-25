window.onload = init;


function init() {
    // initTwo();
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
        if(valid) {revealStats();}
        if(!valid){
            alert("Unable to submit form");
        }

    });
}


function vpc(pc){       //postcode GOOD. ONLY CHECKS IF FIRST 4 CHAR ARE nums and rest arent nums. and length 
    let val = pc.value;

    pc.style.color = "#645CAA";

    let zero = val.charAt(0);
    let one = val.charAt(1);
    let two = val.charAt(2);
    let three = val.charAt(3);
    let charone = val.charAt(4);
    let chartwo = val.charAt(5);

    if (val.length != 6) {
        pc.style.color = "#FF6961";
        console.log("wrong length");
        return false; 
    }


    if (zero <= '0' && zero >= '9') {
        pc.style.color = "#FF6961";
        console.log("zip char 0");
        return false; 
    }

    if (one <= '0' && one >= '9') {
        pc.style.color = "#FF6961";
        console.log("zip char 2");
        return false; 
    }

    if (two <= '0' && two >= '9') {
        pc.style.color = "#FF6961";
        console.log("zip char 1");
        return false; 
    }

    if (three <= '0' && three >= '9') {
        pc.style.color = "#FF6961";
        console.log("zip char 3");
        return false; 
    }

    // if (three >= '0' && three <= '9') {
    //     pc.style.color = "#FF6961";
    //     console.log("zip letter 1 ");
    //     return false; 
    // }

    // if (three <= '0' && three >= '9') {
    //     pc.style.color = "#FF6961";
    //     console.log("zip letter 2");
    //     return false; 
    // }
}

function vpw(pw) {      //password
    let val = pw.value;

    pw.style.color = "#FF6961";

    var us = false;

    if (val == null) return false;

    if ((val.includes('!') || val.includes('@') || val.includes('#') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('(') || val.includes(')') || val.includes('-') || val.includes('_') || val.includes('=') || val.includes('+') || val.includes('[') || val.includes(']') || val.includes('{') || val.includes('}') || val.includes(';') || val.includes(':') || val.includes('"') || val.includes('<') || val.includes(',') || val.includes('>') || val.includes('.') || val.includes('/') || val.includes('?') || val.includes('!')) && ( val.includes('1') ||  val.includes('2') ||  val.includes('3') ||  val.includes('4') ||  val.includes('5') ||  val.includes('6') ||  val.includes('7') ||  val.includes('8') ||  val.includes('9') ||  val.includes('0'))
    && (val.includes('A') || val.includes('B') || val.includes('C') || val.includes('D') || val.includes('E') || val.includes('F') || val.includes('G') || val.includes('H') || val.includes('I') || val.includes('J') || val.includes('K') || val.includes('L') || val.includes('M') || val.includes('N') || val.includes('O') || val.includes('P') || val.includes('R') || val.includes('S') || val.includes('T') || val.includes('U') || val.includes('V') || val.includes('Y') || val.includes('Z') || val.includes('X') || val.includes('Y') || val.includes('Z')) && (val.includes('a') || val.includes('b') || val.includes('c') || val.includes('d') || val.includes('e') || val.includes('f') || val.includes('g') || val.includes('h') || val.includes('i') || val.includes('j') || val.includes('k') || val.includes('l') || val.includes('m') || val.includes('n') || val.includes('o') || val.includes('p') || val.includes('r') || val.includes('s') || val.includes('t') || val.includes('u') || val.includes('v') || val.includes('y') || val.includes('z') || val.includes('x') || val.includes('y') || val.includes('z'))) {
        pw.style.color = "#645CAA";
        us = true;
    }

    if (val.length < 14) {
        pw.style.color = "#FF6961";
        us = false;
    }

    return us;
}

function vnm(nm) {      //name
    let val = nm.value;

    if (val.includes('!') || val.includes('@') || val.includes('#') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('(') || val.includes(')') || val.includes('-') || val.includes('_') || val.includes('=') || val.includes('+') || val.includes('[') || val.includes(']') || val.includes('{') || val.includes('}') || val.includes(';') || val.includes(':') || val.includes('"') || val.includes('<') || val.includes(',') || val.includes('>') || val.includes('.') || val.includes('/') || val.includes('?') || val.includes('!')) {
        nm.style.color = "#FF6961";
        return false;
    }
    if ( val.includes('1') ||  val.includes('2') ||  val.includes('3') ||  val.includes('4') ||  val.includes('5') ||  val.includes('6') ||  val.includes('7') ||  val.includes('8') ||  val.includes('9') ||  val.includes('0')) {
        nm.style.color = "#FF6961";
        return false; 
    }

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

    let att = val.indexOf("@");
    let dot = val.indexOf(".");
    
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
}

function vun(un){       //username
    let val = un.value;

    if (val.charAt(0) != ('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'R'||'S'||'T'||'Q'||'W'||'X'||'Z')) {
        return false;
    }

    if (val.length <5 || val.length>12) {
        return false; 
    }

    if ((val.charAt(val.length - 1)) != ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) {
        return false;
    }

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