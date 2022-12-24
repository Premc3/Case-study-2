// Task1: initiate app and run server at 3000

// const path=require('path');
// app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
var Express=require("express");
var Bodyparser = require("body-parser");
var Mongoose = require("mongoose");
var Cors = require("cors");
const{urlencoded}= require("body-parser")
const{EmployeeModel} = require('./model/employeelist.js');

var app= new Express();
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:false}));
app.listen(3000,()=>{
    console.log("Server is up");
})

// Task2: create mongoDB connection 
Mongoose.connect("mongodb+srv://Premc:12348765@cluster0.glgxktq.mongodb.net/EmployeeDB?retryWrites=true&w=majority",{useNewUrlParser:true} 
);

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below
app.get('/',(req,res)=>{
    res.send('welcome')
})
app.post('/api/employeelist',async(req,res)=>{
    var data = req.body
    var employee = new EmployeeModel(data);
    await student.save(
        (err,data)=> {if(err){
                        res.json({"Status":"Error","Error":err})
                    }
                        else{
                            res.json({"Status":"Success","Data":data})
                        }
        }         
            )  
    console.log(data)
    
})

//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',(req,res)=>{
    EmployeeModel.find(
    (err,data)=>{
        if(err){
            res.json({"Status":"Error","Error":err})
        }
            else{
                res.json({"Status":"Success","Data":data})
            }
        }
    
)
})

//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id',(req,res)=>{
    let id= req.params.id
    var data = req.body
     EmployeeModel.find(data({id:""}),
        (err,data)=>{
            if(err){
                res.json({"Status":"Error","Error":err})
            }
                else{
                    res.json({"Status":"Success","Data":data})
                }
            }
        
    )
});
// //TODO: send data from db using api '/api/employeelist'
// //Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist',(req,res)=>{
    var employeeId =req.body.employeeId;
    var data = req.body;
        EmployeeModel.updateMany(
        {
            "name":employeeName
        },data,(err,data)=>{if (err) {
            res.json({"Status":"Error","Error":err})
            
        } else {
           res.json({"Status":"Updated","Data":data}) 
        }}
    )
    }
    )

// //TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/api/employeelist/:id',(req,res)=>{
    var employeeId =req.body.employeeID;
    var data = req.body;
    let id= req.params.id;
    EmployeeModel.findOneAndDelete(
    {
        "employeeId":employeeID
    },data,(err,data)=>{if (err) {
        res.json({"Status":"Error","Error":err})
        
    } else {
       res.json({"Status":"Updated","Data":data}) 
    }}
)
  
})
// //TODO: Update  a employee data from db by using api '/api/employeelist'
// //Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist',(req,res)=>{
    var employeeId =req.body.employeeId;
    var data = req.body;
        EmployeeModel.findOneAndUpdate(
        {
            "employeeId":employeeID
        },data,(err,data)=>{if (err) {
            res.json({"Status":"Error","Error":err})
            
        } else {
           res.json({"Status":"Updated","Data":data}) 
        }}
    )
    })

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



