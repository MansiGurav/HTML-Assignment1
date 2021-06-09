console.log("app.js loaded ....");
function onSubmit(){
    
    const userName=document.getElementById("userName").value;
    const email=document.getElementById("email").value;
    const dob=document.getElementById("dob").value;
    
    const user=new User(userName,email,dob);
    if(typeof(Storage)!=="undefined"){
    //dhanashree@mastek.com->dhanashree dhanashree@mastek.com 9jun2021        
        sessionStorage.setItem(user.email,user.toString());
        alert("user data saved successfully!")
    }else{
        alert("Storage not supported ! ");
    }
    console.log("userName "+userName);
    console.log("email "+email);
    console.log("dob "+dob);
    // return false;
}

// 1. creating Javascript object: overaloaded constructor for an object
function User(userName,email,dob){
    this.userName=userName;
    this.email=email;
    this.dob=dob;
    this.toString=function (){
        return userName+" "+email+" "+dob;
    }
}

// 2. storing it in local/session storage