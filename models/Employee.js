const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
   
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: false
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);


module.exports = Employee;