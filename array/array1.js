//array is group of elements
//index
var users = ["ram","shtyam","gita","sita","hari"];
console.log(users);

// console.log(users[0]);
// console.log(users[1]);
users.push("nita");
console.log(users);
var removedElm = users.pop();
console.log("removing...",removedElm);
console.log(users);


users.unshift("natasha");
console.log(users);
var removedElm = users.shift();
console.log("removing...",removedElm);
console.log(users);




// for(let i=0;i<users.length;i++){

//     console.log(users[i]);
// }