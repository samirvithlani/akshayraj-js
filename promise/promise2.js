const orderFood =() =>{


        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                resolve({
                    name:"pizza",
                    price:200,
                    status:"success"
                })
            },3000)
        })

}

const payment = (orderData) =>{


    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
            resolve({
                orderData:orderData.name,
                price:orderData.price,
                status:"payment success"
            })
        },2000)

    })

    
}

const zomato =()=>{


        console.log("Ordering food from zomato");
        orderFood().then((orderData)=>{
            console.log(orderData);

            console.log("Payment processing");
            payment(orderData).then((paymentData)=>{
                console.log(paymentData);
            })

        })

        



}

zomato();