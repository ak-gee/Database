import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

 async function readData (){
  // let response  = await fetch('http://localhost:5000/student/1',{
    let response  = await fetch('https://app1db.herokuapp.com/student/1',{
    
    method : 'GET',
    headers : {
      'Content-type':'Application/json',
    },    
    
      })
 
      let data = await response.json();
      // console.log(JSON.stringify(data));
        return data;
 }

 async function postData (){

  let data = {
    "name": "STudent_1",
    "email":"ajsd@domain.com",
    
  }
  // let response  = await fetch('http://localhost:5000/student',{
    let response  = await fetch('https://app1db.herokuapp.com/student',{
    
    method : 'POST',
    headers : {
      'Content-type':'Application/json',
    },
    body:JSON.stringify(data),
    
    
      }
      )
     
      // let data = await response.json();
      // console.log(JSON.stringify(data));
        return data;
 }


function App() {
  const [op,setOp] = useState([])
   var data_op =0;
   postData()

   readData()
   .then (data => {
    //  console.log(data)
    setOp(`Student name is ${data.name} and id is ${data.id}`);
    // setOp(data)
    }
     );
  //  console.log(op)


  return (

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
 
        <p>
        
          {/* {op.name} has an id {op.id} */}
          {op}
         
        </p>
        <a
         
        >
         Reading from Students API
        </a>
       
        
      </header>
    </div>
  );
}

export default App;
