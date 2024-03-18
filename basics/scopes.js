//var
//let
//const

//var global scope
//let block scope
//const block scope ->final

var a = 10
console.log("value of a = ",a)
let b = 20
console.log("value of b = ",b)

{
    var p = 30
    let q = 40
    console.log("value of a inside block = ",a)
    console.log("value of b inside block = ",b)
    console.log("value of p inside block = ",p)
    console.log("value of q inside block = ",q)
}


console.log("value of p outside block = ",p)
//console.log("value of q outside block = ",q)

var a = 1000;
console.log("value of after redeclaration = ",a)
// let b = 2000; //error
// console.log("value of after redeclaration = ",b);


b = 2000
console.log("value of B after reassignment = ",b)
const c = 3000 // block
console.log("value of c = ",c)
//c = 4000 //error