// function validateForm(form){
//     let postc = document.getElementById(this.id);
// }

function vpc(pc){
    let val = pc.value;

    if(/^[0-9]{4}[A-Z]{2}$/.test(val)){
        console.log("bruh");
        pc.style.color = "#645CAA";
    }else {
        pc.style.color = "#FF6961";
        console.log("not bruh");
    }
}