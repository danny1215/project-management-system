const mongoose = require("mongoose");
const db = require("../models");

// This file empties the developer collection and inserts the developer below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project_managment_system"
);

const employeeSeed = [
  {
    First_name: "dany",
    Last_name: "mes",
    Email: "danny@gmail.com",
    Role: "developer",
  },
  {
    First_name: "Zaid",
    Last_name: "Alhara",
    Email: "Zaid@gmail.com",
    Role: "manager",
  }
  
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });