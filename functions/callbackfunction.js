//single thread app
//multi thread app


function toBeCalled(){
    console.log("I am called");
}

function test(a){
    console.log(a);
    
    a();
}


test(toBeCalled);
