import React from "react";
import './App.css';
import API from './components/api/API.jsx' 


 

function App() {

  // const [name,setName] =  useState("")
  // const getPerson = () =>{
  //   Axios.get("https://randomuser.me/api").then((response)=>{
  //     console.log(response.data.results[0].name.first + response.data.results[0].name.last)
  //     setName("Hi " + response.data.results[0].name.first + " " + response.data.results[0].name.last);
  //   }) 
  //} 


  return (
    // <div>
    // <h1>Hello</h1>
    // <button onClick={getPerson}>Get person</button>
    // <br/>
    // {name}
    <>

   

    <API/>
  
    </>
  
    // </div>
        )}

export default App; 
