//var budget = parseInt(prompt("What's your budget for this month?"));
//console.log("Your budget is: " + budget);
var budget = 20000;
const goa = () => {

    console.log("Goa is a great place to visit");

}

const manali = () => {

    console.log("Manali is a great place to visit");


}
const ooty = () => {

    console.log("Ooty is a great place to visit");

}
const amsterdam = () => {

    console.log("Amsterdam is a great place to visit");

}
const la = () => {
    
        console.log("Los Angeles is a great place to visit");
    
}

const vacation = (cb) => {
    
        console.log("Vacation is called...");
    
        cb();
    
}


switch (true) {


     case (budget >= 10000 && budget <= 20000):
        console.log("You can go to Goa");
        vacation(goa);
     break;
     case (budget >= 20001 && budget <= 35000):
        console.log("You can go to Manali");
        vacation(manali);
     break;   

}