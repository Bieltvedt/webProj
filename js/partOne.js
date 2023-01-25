window.onload = init;


function init() {
    console.log("test");
    const signup = document.getElementById("signup-form");
    signup.addEventListener("submit", (event) => {
        console.log("ev list. called");
        event.preventDefault();
        let pcValid = vpc(signup.elements["zip"]);
        let pwValid = vpw(signup.elements["password"])
    
        if(pcValid && pwValid){
            signup.submit();
        }else if(pcValid && !pwValid){
            alert("Please insert a password with:\n\tat least 12 charecters\n\tat least one symbol, lowercase letter, uppercase letter, and number")
        }else if(!pcValid && pwValid){
            alert("Please insert a valid NL zipcode");
        }else {
            alert("password and zip code invalid!");
        }
    });
}


function vpc(pc){
    let val = pc.value;

    if(/^[0-9]{4}[A-Z]{2}$/.test(val)){
        pc.style.color = "#645CAA";
        return true;
    }else {
        pc.style.color = "#FF6961";
        return false;
    }
}

function vpw(pw) {
    let val = pw.value;

    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/.test(val)){
        pw.style.color = "#645CAA";
        return true;
    }else {
        pw.style.color = "#FF6961";
        return false;
    }
}