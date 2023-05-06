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
      <h4><p>This website allows you to check if you have any lung diseases</p></h4>
    </div>
    </>
  );
}

export default Temp;