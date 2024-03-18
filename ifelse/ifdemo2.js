//nested
var age = 62

if(age>18){

    console.log("You are eligible to vote")

    if(age>21){
        console.log("You are eligible to marry")

        if(age>60){
            console.log("You are eligible to retire")
        }
        else{
            console.log("You are not eligible to retire")
        }
    }
    else{
        console.log("You are not eligible to marry")
    }
}
else{
    console.log("You are not eligible to vote")
    if(age>14){
        console.log("You are eligible to go to high school")
    }
}