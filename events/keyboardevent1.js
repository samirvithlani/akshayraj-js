function getData(){

    var txt = document.getElementById("txt").value;
    var nameerr = document.getElementById("nameerr");
    console.log(txt);

    if(txt.length<3){
        // alert("Please enter more than 3 characters");
        nameerr.innerHTML = "Please enter more than 3 characters";
    }
    else{
        nameerr.innerHTML = "";
    }
}

var emailList =["admin@gmail.com","root@gmail.com","abc@gmail.com"]
function getEmail(){

    var email = document.getElementById("email").value;
    var emailerr = document.getElementById("emailerr");
    console.log(email);
    if(emailList.includes(email)){
        emailerr.innerHTML = "Email already exists";
    }
    else{
        emailerr.innerHTML = "";
    }
    
}