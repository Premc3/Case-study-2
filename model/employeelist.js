var Mongoose = require("mongoose");

const employeeSchema = Mongoose.Schema(
    {   
        employeeName : String,
        location : String,
        position : String,
        salary :Number
    }
);

var EmployeeModel = Mongoose.model("Employee", employeeSchema);
module.exports = {EmployeeModel};