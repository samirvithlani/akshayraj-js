const employees = [
    {
        id:1,
        name:"rose",
        age:25,
        gender:"female",
        salary:50000,
        city:"bangalore",
        isActive:true,
        department:"HR"
    },
    {
        id:2,
        name:"ram",
        age:25,
        gender:"male",
        salary:80000,
        city:"bangalore",
        isActive:true,
        department:"Developer"
    },
    {
        id:3,
        name:"rima",
        age:26,
        gender:"female",
        salary:40000,
        city:"pune",
        isActive:true,
        department:"HR"
    },
    {
        id:4,
        name:"rajesh",
        age:26,
        gender:"male",
        salary:75000,
        city:"pune",
        isActive:true,
        department:"Developer"
    }
]

var emps1 = employees.filter((emp)=>{


    return emp.gender =="female"

})
//console.log(emps1);

var emps2 = employees.filter((emp)=>{
    return emp.city =="pune" && emp.gender == "male"
})
console.log(emps2);

var emps3 = employees.filter((emp)=>{
    return emp.salary >= 50000
})
console.log(emps3);

