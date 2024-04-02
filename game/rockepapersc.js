const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const sc = document.getElementById('sc');
var data = ["rock","paper","sc"];
var userOutput ="";
var compOutput = "";

var score = 0;


rock.addEventListener("click",()=>{

        userOutput = "rock";
        
        compOutput = data[Math.floor(Math.random()*3)];
        result(userOutput,compOutput);
        

})
paper.addEventListener("click",()=>{
        userOutput = "paper";
        
        compOutput = data[Math.floor(Math.random()*3)];
        result(userOutput,compOutput);
})
sc.addEventListener("click",()=>{
        userOutput = "sc";
        
        compOutput = data[Math.floor(Math.random()*3)];
        result(userOutput,compOutput);
})



const result = (userOutput,compOutput)=>{

    const output = document.getElementById('output');

    console.log("user",userOutput);
    console.log("comp",compOutput);
    if(userOutput == compOutput){
        console.log("draw");
        output.innerHTML = "Draw";
        output.style.color = "black";
    }
    else if ((userOutput == "rock" && compOutput == "sc" ) || (userOutput == "paper" && compOutput == "rock") || (userOutput == "sc" && compOutput == "paper")){
        score++;
        console.log("user wins");
        output.innerHTML = "User Wins" + " " + score;
        output.style.color = "green";
        
    }
    else{
        console.log("comp wins");
        score--;
        output.innerHTML = "Computer Wins" + " " + score;
        output.style.color = "red";
    }
        
    

}







