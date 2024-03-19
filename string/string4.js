var sname = "Akunal"

console.log(sname.charAt(0)) // k
console.log(sname.charCodeAt(0)) // u

console.log(String.fromCharCode(65)) // u
console.log(String.fromCharCode(sname.charCodeAt(0)+32)) // u


//indexOf
var ind = sname.search("k") // 3
console.log("index of k...",ind)


var data = "india is great, india is not bad";

//data = data.replace("india","bharat")
//regex for global replace
//data = data.replace(/india/g,"bharat")
console.log(data)


data = data.substring(0,5)
console.log("substring...",data)

