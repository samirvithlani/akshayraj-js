var users = ["kunal","sneha","ajay","parth","amit","Zara","aman","malayalam","hindi","hr"]
console.log(users)

function sortByLen(a,b){

    return b.length - a.length
}

//users.sort()
users.sort(sortByLen)
console.log(users)


function sortbyValue(a,b){
    return a-b
}

var amount = [100,1,45,4,34,56,78,98,1900,89,455,345]
console.log(amount)
amount.sort(sortbyValue)
console.log(amount)
