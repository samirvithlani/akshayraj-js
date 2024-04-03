var availableTickets = 100;

const submitHandler = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const tickets = document.getElementById("tickets").value;
  const output = document.getElementById("output");
  const loder = document.getElementById("loder");
  const userObj = {

    name: name,
    tickets: tickets,
  };

  loder.innerHTML = "loading...";
  bookTickets(userObj).then((ticketData) => {
    console.log(ticketData);
    loder.innerHTML = "Tickets Booked Successfully payment processing...";
    payment(ticketData).then((paymentData) => {
        loder.innerHTML = "";
        console.log("Payment Done");
        console.log(paymentData);
        output.innerHTML = `Hi ${paymentData.ticket.user.name}, Your Ticket No is ${paymentData.ticket.ticketNo}`;


    }).catch((error) => {

    })

  }).catch((error)=>{
        console.log(error);
  })
};

const bookTickets = (userObj) => {
    console.log("Booking Tickets");
  return new Promise((resolve, reject) => {
    if (availableTickets > userObj.tickets) {
      const ticketNo = Math.floor(Math.random() * 1000);
      setTimeout(() => {
        resolve({
          message: "Tickets Booked",
          user: userObj,
          ticketNo: ticketNo,
        });
      }, 3000);
    }
    else{
        setTimeout(()=>{
            reject({
                message: "Tickets Not Available",
                user: userObj
            })
        },2000)
        
    }
  });
};

const payment = (ticketObj) => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve({
                    message: "Payment Done",
                    ticket: ticketObj
                })
        }, 3000);
    })
};
