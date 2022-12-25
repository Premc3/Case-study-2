const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {   
        employeeName : String,
        location : String,
        position : String,
        salary :Number
    }
);

const EmployeeModel = mongoose.model("Employee", employeeSchema);
module.exports = {EmployeeModel};
