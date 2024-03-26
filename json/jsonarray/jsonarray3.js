var companies = [
    {
        name:"Google",
        employees:[
            {
                id:1,
                name:"sundar",
                age:45,
                post:"CEO",
                salary:500000,
                isActive:true,
                gender:"male"
            },
            {
                id:2,
                name:"larry",
                age:50,
                post:"Founder",
                salary:800000,
                isActive:true,
                gender:"male"
            },
            {
                id:3,
                name:"sergey",
                age:48,
                post:"Founder",
                salary:700000,
                isActive:true,
                gender:"male"
            }
        ]
    },
    {
        name:"Microsoft",
        employees:[
            {
                id:1,
                name:"satya",
                age:50,
                post:"CEO",
                salary:600000,
                isActive:true,
                gender:"female"
            },
            {
                id:2,
                name:"bill",
                age:65,
                post:"Founder",
                salary:900000,
                isActive:true,
                gender:"male"
            },
            {
                id:3,
                name:"paul",
                age:55,
                post:"Founder",
                salary:800000,
                isActive:true,
                gender:"male"
            }
        ]
    },
    {
        name:"Facebook",
        employees:[
            {
                id:1,
                name:"mark",
                age:35,
                post:"CEO",
                salary:700000,
                isActive:true,
                gender:"female"
            },
            {
                id:2,
                name:"dustin",
                age:35,
                post:"Founder",
                salary:1000000,
                isActive:true,
                gender:"male"
            },
            {
                id:3,
                name:"chris",
                age:35,
                post:"Founder",
                salary:900000,
                isActive:true,
                gender:"male"
            }
        ]
    },
]

//var google = companies.find((comp)=>comp.name == "Google").employees.find((emp)=>emp.post == "CEO")
//var google = companies.find((comp)=>comp.name == "Google").employees.filter((emp)=>emp.salary >= 700000)
//var google = companies.filter((comp)=>comp.name == "Google")

var maleEmps = companies.map((comp)=>{
    return comp.employees.filter((emp)=>{
        return emp.gender == "male"
    })
})

console.log(maleEmps);


//flatmap 

var maleEmps = companies.flatMap((comp)=>{
    return comp.employees.filter((emp)=>{
        return emp.gender == "male"
    })
})
console.log(maleEmps);



//console.log(google);