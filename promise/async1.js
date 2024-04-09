const getData = () => {



    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve('Data received')

        },2000)
    })
}

// var x;
// getData().then((data)=>{
//     console.log(data)
//     x = data;
// })

// console.log("x == ",x) // undefined


async function readData(){

    console.log("starts")
    var x =await getData();
    console.log("x == ",x) // Promise { <pending> }
    console.log("ends")



}

readData() // x ==  Promise { <pending> }