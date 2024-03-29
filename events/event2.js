// function addtxt(){

//     var txt = document.getElementById("txt");
//     txt.innerHTML = "Hello World";
    

// }
// function removetxt(){


//     var txt = document.getElementById("txt");
//     txt.innerHTML = "";
    
// }


function managetxt(){


    var txt = document.getElementById("txt");
    var mydiv = document.getElementById("mydiv");
    //apply shadow
    mydiv.style.boxShadow = "10px 10px 10px #888888";
    if(txt.innerHTML ==""){
        txt.innerHTML = "Hello World";
    }
    else{
        txt.innerHTML = "";
    }

}