const btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
    //alert("Button Clicked");
})
btn.addEventListener("mouseover",()=>{

    btn.style.backgroundColor = "red";
})
btn.addEventListener("dblclick",()=>{
    btn.style.backgroundColor = "green";
})

const btn1 = document.getElementById('btn1');
var divs = document.getElementsByTagName('div');

btn1.addEventListener("click",()=>{

    // divs[0].style.backgroundColor = "red";
    // divs[0].style.height = "100px";

    for(let i=0;i<divs.length;i++){
        divs[i].style.backgroundColor = "red";
        divs[i].style.margin = "10px";
        divs[i].style.height = "100px";

    }
})