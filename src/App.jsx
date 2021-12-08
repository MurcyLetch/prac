import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = () =>{
    const [count,setCount]=useState(0);
    const Incnum =()=>{
        setCount(count+1);
    };
    return (
        <>
            <h1 className="heading_style">{count}</h1>
            <button className="button_style" onClick={Incnum}>Click Me</button>
        </>
    )
}
export default App;