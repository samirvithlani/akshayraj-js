function create(){

    const mydiv = document.getElementById('mydiv');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hello World';
    mydiv.appendChild(h1);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click Me';
    btn.addEventListener("click",()=>{
        alert('Hello World');
    })

    mydiv.appendChild(btn);


}