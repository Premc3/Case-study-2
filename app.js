// Task1: initiate app and run server at 3000

const Express= require ("express");
var Bodyparser =require("body-parser");
var Mongoose = require("mongoose");
const Cors = require("cors");
const{urlencoded} = require("body-parser")
const {EmployeeModel}=require("./model/employee");
var app=new Express();
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:false}));
app.use(Cors());
const path=require('path');
app.use(Express.static(path.join(__dirname+'/dist/FrontEnd')));
// const { default: mongoose } = require("mongoose");

app.listen(3000,()=>{
    console.log('Server is up');
})


// Task2: create mongoDB connection 
Mongoose.connect("mongodb+srv://Premc:12348765@cluster0.glgxktq.mongodb.net/EmployeeDB?retryWrites=true&w=majority",{useNewUrlParser:true})

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below
app.post('/',async(req,res)=>{
    var data =req.body;
    try{
        const Employee = await EmployeeModel.create(data);
        res.json(Employee)
    } catch(error){
        res.status(500).send(error)
    }
})
//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',async(req,res)=>{
    try{
        const posts = await EmployeeModel.find();
        res.json(posts)
    }catch(error){
        res.status(500).send(error)
    }
})


//TODO: get single data from db  using api '/api/employeelist/:id'
app.get( '/api/employeelist/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        const post = await EmployeeModel.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)  
    }
});
//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist',async(req,res)=>{
    var data =req.body;
    try{
        const Employee = await EmployeeModel.create(data);
        res.json(Employee)
    } catch(error){
        res.status(500).send(error)
    }
})

//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete('/api/employeelist/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        const post = await EmployeeModel.findByIdAndDelete(id);
        res.json('Deleted Sucessfully');
    }catch(error){
        res.status(500).send(error)
    }
})
//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist/:id',async(req,res)=>{
    const {id}=req.params;
    const data = req.body;
    try{
        const post = await EmployeeModel.findByIdAndUpdate(id,data);   
        res.json('Updated Successfully');
    }catch(error){
        res.status(500).send(error)
    }
})


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



