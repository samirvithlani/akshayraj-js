const submitHandler = (event) => {
  event.preventDefault();
  //console.log(event)
  //console.log("Submit button clicked");

  var name = document.getElementById("name");
  var nameerror = document.getElementById("nameerror");
  var email = document.getElementById("email");

  console.log(name.value.length);
  console.log(email.value);

  if (name.value.length <= 0) {
    nameerror.innerHTML = "Name is required";
    name.focus();
  } else {
    nameerror.innerHTML = "";

    var result = document.getElementById("result");
    var user = {
      name: name.value,
      email: email.value,
    };
    //result.innerHTML = `Name: ${user.name} <br> Email: ${user.email}`;
    result.innerHTML = JSON.stringify(user);
  }
};


const checkLen = () => {

    var name = document.getElementById("name");
    var nameerror = document.getElementById("nameerror");

    if(name.value.length<=0){
        nameerror.innerHTML = "Name is required";
        name.focus();
    }
    else{
        nameerror.innerHTML = "";
    }
}