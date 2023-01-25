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
    if (val.charAt(0) != (1||2||3||4||5||6||7||8||9||0)) return false;
    if (val.charAt(1) != (1||2||3||4||5||6||7||8||9||0)) return false;
    if (val.charAt(2) != (1||2||3||4||5||6||7||8||9||0)) return false;
    if (val.charAt(3) != (1||2||3||4||5||6||7||8||9||0)) return false;
    if (val.charAt(4) != (A||B||C||D||E||F||G||H||I||J||K||L||M||N||O||P||R||S||T||Q||W||X||Z)) return false;
    if (val.charAt(5) != (A||B||C||D||E||F||G||H||I||J||K||L||M||N||O||P||R||S||T||Q||W||X||Z)) return false;
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

    if (val.charAt != (A||B||C||D||E||F||G||H||I||J||K||L||M||N||O||P||R||S||T||Q||W||X||Z));
    


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







// window.onload = init;


// function init() {
//     console.log("test");
//     const signup = document.getElementById("signup-form");
//     signup.addEventListener("submit", (event) => {
//         console.log("ev list. called");
//         event.preventDefault();
//         let pcValid = vpc(signup.elements["zip"]);
//         let pwValid = vpw(signup.elements["password"])
    
//         if(pcValid && pwValid){
//             signup.submit();
//         }else if(pcValid && !pwValid){
//             alert("Please insert a password with:\n\tat least 12 charecters\n\tat least one symbol, lowercase letter, uppercase letter, and number")
//         }else if(!pcValid && pwValid){
//             alert("Please insert a valid NL zipcode");
//         }else {
//             alert("password and zip code invalid!");
//         }
//     });
// }


// function vpc(pc){
//     let val = pc.value;

//     if(/^[0-9]{4}[A-Z]{2}$/.test(val)){
//         pc.style.color = "#645CAA";
//         return true;
//     }else {
//         pc.style.color = "#FF6961";
//         return false;
//     }
// }

// function vpw(pw) {
//     let val = pw.value;

//     if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/.test(val)){
//         pw.style.color = "#645CAA";
//         return true;
//     }else {
//         pw.style.color = "#FF6961";
//         return false;
//     }
// }