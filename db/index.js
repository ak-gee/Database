const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
app.use(bodyParser.json());

let students = [];
let mentors = [];

app.get("/students",(req,res) =>{
    res.json(students)
})

app.get("/mentors",(req,res) =>{
    res.json(mentors)
})

app.post("/student",(req,res) => {
    let studentData = {
        name:req.body.name,
        age:req.body.age,
        id:students.length+1,
        
      
    }
 
    students.push(studentData);
    res.json({
        message:"Success"

    })
})

app.get("/student/:id",(req,res)=>{
    if(students[req.params.id - 1]){
        res.json(students[req.params.id - 1])
    }else{
        res.json({
            message:"no record available"
        })
    }
 })
  
 app.put("/student/:id",(req,res)=>{
    if(students[req.params.id - 1]){
        students[req.params.id-1].name = req.body.name;
        // students[req.params.id-1].mentor = req.body.mentor.toString();
        students[req.params.id-1].mentor = req.body.mentor;
        res.json({
            message:"success"
        })
    }else{
        res.json({
            message:"no record available"
        })
    }
 })

 app.post("/mentor",(req,res) => {
    let mentorData = {
        name:req.body.name,
        id:mentors.length+1  
      
    }
 
    mentors.push(mentorData);
    res.json({
        message:"Success"

    })
})

 app.get("/mentor/:id",(req,res)=>{
    if(mentors[req.params.id - 1]){
        res.json(mentors[req.params.id - 1])
    }else{
        res.json({
            message:"no record available"
        })
    }
 })
 app.put("/mentor/:id",(req,res)=>{
    if(mentors[req.params.id - 1]){
        mentors[req.params.id-1].name = req.body.name;
        mentors[req.params.id-1].students = req.body.students.toString();
        
        res.json({
            message:"success"
        })
    }else{
        res.json({
            message:"no record available"
        })
    }
 })

 app.delete("/mentor/:id",(req,res)=>{
    let mentorData = mentors.find(mentor=> mentor.id == req.params.id);
    let index = mentors.indexOf(mentortData)
    // console.log(index)
    mentors.splice(index,1)
    res.json({
        message: "record deleted"
    })
 })
 
  
 app.delete("/student/:id",(req,res)=>{
    let studentData = students.find(student=> student.id == req.params.id);
    let index = students.indexOf(studentData)
    // console.log(index)
    students.splice(index,1)
    res.json({
        message: "record deleted"
    })
 })
 

let port = 3000;
app.listen(port,() =>{
    console.log(`Port open on ${port}`)
})
