console.log("Data Receiving...");

function onSubmit() {
    var txt = "";
    if (document.getElementById("number").validity.rangeOverflow) {
        txt = "Value too large";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
    if (document.getElementById("number").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;
    console.log("Name is", " ", name);
    console.log("Email is", " ", email);
    console.log("Number is", " ", number);
    console.log("Date of birth is", " ", dob);

}