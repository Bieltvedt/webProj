window.onload = init;


function init() {
    console.log("test");
    const required = ["name", "email", "username", "password", "country", "zip", "sex", "language"];
    const signup = document.getElementById("#signup-form");
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

    if(/^[0-9]{4}[A-Z]{2}$/.test(val)){
        pc.style.color = "#645CAA";
        return true;
    }else {
        pc.style.color = "#FF6961";
        return false;
    }
}

function vpw(pw) {      //password
    let val = pw.value;

    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/.test(val)){
        pw.style.color = "#645CAA";
        return true;
    }else {
        pw.style.color = "#FF6961";
        return false;
    }
}