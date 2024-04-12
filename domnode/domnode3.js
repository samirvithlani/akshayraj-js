var users = [
  {
    id: 101,
    name: "John",
    age: 25,
    status: true,
    gender: "male",
  },
  {
    id: 102,
    name: "amit",
    age: 30,
    status: true,
    gender: "male",
  },
  {
    id: 103,
    name: "sara",
    age: 22,
    status: false,
    gender: "female",
  },
  {
    id: 104,
    name: "peter",
    age: 35,
    status: true,
    gender: "male",
  },
  {
    id: 105,
    name: "julia",
    age: 28,
    status: false,
    gender: "female",
  },
];

const displayTable = (flag) => {
  const tbody = document.getElementById("tbody");

  if (flag == false || flag == undefined) {
    for (let i = 0; i < users.length; i++) {
      const tr = document.createElement("tr");

      const idTD = document.createElement("td");
      idTD.innerHTML = users[i].id;

      const nameTD = document.createElement("td");
      nameTD.innerHTML = users[i].name;

      const ageTD = document.createElement("td");
      ageTD.innerHTML = users[i].age;

      const statusTD = document.createElement("td");
      statusTD.innerHTML = users[i].status;

      const genderTD = document.createElement("td");
      genderTD.innerHTML = users[i].gender;

      const actionTD = document.createElement("td");
      const Deletebutton = document.createElement("button");
      Deletebutton.innerHTML = "Delete";
      actionTD.appendChild(Deletebutton);

      Deletebutton.addEventListener("click", () => {
        users = users.filter((user) => user.id != users[i].id);
        displayTable(true);
      });

      tr.appendChild(idTD);
      tr.appendChild(nameTD);
      tr.appendChild(ageTD);

      tr.appendChild(genderTD);
      tr.appendChild(statusTD);
      tr.appendChild(actionTD);

      tbody.appendChild(tr);
    }
  } else {
    //clear the table
    tbody.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      const tr = document.createElement("tr");

      const idTD = document.createElement("td");
      idTD.innerHTML = users[i].id;

      const nameTD = document.createElement("td");
      nameTD.innerHTML = users[i].name;

      const ageTD = document.createElement("td");
      ageTD.innerHTML = users[i].age;

      const statusTD = document.createElement("td");
      statusTD.innerHTML = users[i].status;

      const genderTD = document.createElement("td");
      genderTD.innerHTML = users[i].gender;
      const actionTD = document.createElement("td");
      const Deletebutton = document.createElement("button");
      Deletebutton.innerHTML = "Delete";
      actionTD.appendChild(Deletebutton);

      Deletebutton.addEventListener("click", () => {
        users = users.filter((user) => user.id != users[i].id);
        displayTable(true);
      });

      tr.appendChild(idTD);
      tr.appendChild(nameTD);
      tr.appendChild(ageTD);

      tr.appendChild(genderTD);
      tr.appendChild(statusTD);
      tr.appendChild(actionTD);

      tbody.appendChild(tr);
    }
  }
};

const addUser = () => {
  var user = {
    id: 106,
    name: "jane",
    age: 25,
    status: true,
    gender: "female",
  };

  //    users.push(user);
  users = [...users, user];
  console.log(users);
  displayTable(true);
};
