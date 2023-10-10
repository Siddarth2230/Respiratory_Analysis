import React from 'react';
import {Link } from "react-router-dom";
import "./Form.css";

function Temp() {
  return (
    <>
    <div className='home1'>
      <ul>
        <li><h3>WELCOME </h3></li>
        <li><Link to="/login"><h3>LOGIN</h3></Link></li>
        <li><Link to="/register"><h3>SIGNUP</h3></Link></li>
    </ul>
    </div>
    <div className='home2'>
      <h4><p>This website allows you to check if you have any lung diseases. It <br></br> 
      does this by utilizing artificial intelligence to analyze your breathing <br></br>
      patterns and compare them against a database of lung diseases. The <br></br> 
      AI can detect subtle changes in your breathing, which can indicate <br></br>
      the presence of a lung disease.</p></h4>
    </div>
    </>
  );
}

export default Temp;