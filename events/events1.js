function test(){

    console.log('test');
    console.log(document.getElementById("txt"))
    console.log(document.getElementById("txt").innerHTML)

    var txt = document.getElementById("txt");
    txt.innerHTML = "Hello World";
    txt.style.color = "red";
    txt.style.fontSize = "20px";

    // document.getElementById("txt").innerHTML = "Hello World";
    // document.getElementById("txt").style.color = "red";
    // document.getElementById("txt").style.fontSize = "20px";
}

function chageLink(){


    var id = document.getElementById("link");
    id.href = "https://www.netflix.com";
    id.innerHTML = "Netflix";
    //target to new page
    id.target = "_blank";
    
}


const show = () => {

    var mydiv = document.getElementById("mydiv");
    mydiv.className = "box";

}

setTimeout(()=>{
    show();
},3000)