var sname = "ram"
var upper = ""

for(let i=0;i<sname.length;i++){


    if(sname.charCodeAt(i)>=97 && sname.charCodeAt(i)<=122){
        upper += String.fromCharCode(sname.charCodeAt(i)-32)
    }


}
console.log("upper...",upper) // RAM