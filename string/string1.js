//string stors data in dynamic array
var user = "ram"
//console.log("Hello " + user + "!")
console.log(user)
var l = user.length
console.log("length =>",l)

console.log(user[0])
console.log(user[1])
console.log(user[2])
user[0] = "R"
console.log(user)


user = user.toUpperCase()
console.log("upper...",user)
user = user.toLowerCase()
console.log("lower...",user)

user = user.concat(" kumar")
console.log("concat...",user)

//user = user.slice(0)
user = user.slice(0,5)
console.log("slice...",user)


