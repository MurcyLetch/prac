import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = () =>{
    //const [count,setCount]=useState(0);
    //const Incnum =()=>{
      //  setCount(count+1);
    //};
    let time=new Date().toLocaleTimeString();
    const [ctime,setctime]=useState(time);
    const solve =()=>{
        time=new Date().toLocaleTimeString();
        setctime(time);
    }
    return (
        <>
            <h1 className="heading_style">{ctime}</h1>
            <button className="button_style" onClick={solve}>Get Time</button>
        </>
    )
}
export default App;