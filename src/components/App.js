
import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  let [timeLeft, setTimeLeft] = useState(0)
  let timerId = null
  const handleKeyDown = (e) =>{
    const val = e.target.value
    console.log(e.keyCode)
    if(e.keyCode === 13){
      //check whether we have already a running timer
      if(timerId){
        clearTimeout(timerId)
      }
      if(!isNaN(val)){
        if(val>=0)
          setTimeLeft(parseInt(val))
      }else{
        setTimeLeft(0)
      }
    }   
  }

  useEffect(()=>{
    if(timeLeft>0){
      timerId = setTimeout(()=>{
        setTimeLeft(timeLeft-1)
      },1000)
    }
  },[timeLeft])
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(e)=>handleKeyDown(e)} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeLeft}</div>
    </div>
  )
}


export default App;