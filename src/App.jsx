import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function App() {

  let [counter , setCounter] = useState(0);
  let handleClick = () =>{
    setCounter(counter+1);
  }

  useEffect( () =>{
    console.log("Inside UseEffect");
    
  },[])

  return (
    <div>
      <h1 style={{fontFamily:'sans-serif'}}>TASBEEH COUNTER</h1>      
      <Button variant="outlined"  onClick={handleClick} >Click me</Button>
      <div  style={{width:"40%",marginLeft:150 ,  marginTop:-27, borderWidth:2, borderColor:'#ccc', borderStyle:'solid'}}>{counter}</div>
    </div>
  )
}
