var boxclass = document.getElementsByClassName('box');
console.log(boxclass);
boxclass[0].addEventListener("mouseover",()=>{
    
    for(let i=0;i<boxclass.length;i++){
        boxclass[i].style.backgroundColor = "green";
        boxclass[i].style.margin = "10px";
        boxclass[i].style.height = "100px";
    }
    
})