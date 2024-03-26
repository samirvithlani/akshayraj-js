var students=[
    {
        id:101,
        name:"Ravi",
        age:23,
        gender:"Male",
        isActive:true,
        marks:90
    },
    {
        id:102,
        name:"Rama",
        age:24,
        gender:"FeMale",
        isActive:true,
        marks:70
    },
    {
        id:103,
        name:"Ajay",
        age:22,
        gender:"Male",
        isActive:false,
        marks:80

    }
]


//console.log(students);
students.forEach((stu)=>{
    console.log(stu.id+" "+stu.name+" "+stu.age+" "+stu.gender+" "+stu.isActive)
})


var  studentsName = students.map((stu)=>{
    return stu.name.toUpperCase();
})
console.log(studentsName);

var students1 = students.map((stu)=>{


    return({
        id:stu.id + 1000,
        name:stu.name.toLowerCase(),
        age:stu.age + 10,
        gender:stu.gender,
        isActive:stu.isActive == true? "Active":"InActive"
    })
})
console.log(students1);



// var totalMarks = students.map((stu)=>{
//     return stu.marks;
// })
// console.log(totalMarks);

//0 + 90 = 90
//90 + 70 = 160
//160 + 80 = 240

// var totalMarks = students.reduce((total,stu)=>{
//     return total + stu.marks;
// },0)

var totalMarks = students.reduce((total,stu)=>(total + stu.marks),0)


console.log(totalMarks);

