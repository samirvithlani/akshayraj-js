var users = ["amit","neha","sharma","rohit","ms","dhoni"];

//u users[i]
// users.forEach((u)=>{

//     console.log(u);
// })

// users = users.map((u)=>{
//     //console.log(u);
//     return u.toUpperCase()
// })
// console.log(users);

//predicate statement
// users = users.filter((u)=>{

//     return u.length>4; //amit false...sharma --true

// })

var x = users.filter((u)=>{
    return u.startsWith("s")
})

console.log(x);
