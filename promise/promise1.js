//sync
//non sync

//----------------------------------------------------------------------------------- 1 hour
//*********************************************************************************** */ 1 await...

//----------------------------------------------------------------------------------- 1 hour
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//*undefined*

// console.log("start");

// setTimeout(()=>{
//     console.log("inside timeout");
// },3000)

// console.log("end");


//PROMISE HAVE 3 stages 
//1 pending
//2 resolve
//3 reject

//promise is class...

const getUserData =()=>{


        var promise = new Promise((resolve,reject)=>{

            //resolve("data fetched")
            setTimeout(()=>{
          //      resolve("data fetched")
                    reject("error")
            },3000)
        })

        console.log(promise);
        promise.then((data)=>{
            console.log(data);
        })
        promise.catch((err)=>{
            console.log(err);
        })

}

//getUserData();

const getUserData1 =()=>{


        var promise = new Promise((resolve,reject)=>{

            setTimeout(()=>{

                resolve({
                    name:"rohit",
                    age:25
                })

            },1500)


        })

        console.log(promise);
        promise.then((data)=>{
            console.log(data);
        })
        promise.catch((err)=>{
            console.log(err);
        })



}
//getUserData1();


const getStudentData =()=>{



    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                name:"rohit",
                age:25
            })
        },3000)
    })

}

var x = getStudentData()
console.log(x);
x.then((data)=>{
    console.log(data);
})
x.catch((err)=>{
    console.log(err);
})