const displayData =()=>{

    var user ={
        name: "John Doe",
        age: 25,
    }

    const mydiv = document.getElementById('mydiv');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.innerHTML = user.name;
    const li2 = document.createElement('li');
    li2.innerHTML = user.age;
    ul.appendChild(li1);
    ul.appendChild(li2);
    mydiv.appendChild(ul);





}