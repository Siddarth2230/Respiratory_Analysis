import React, { useState } from "react";
import axios  from "axios";
import { useNavigate, Link} from "react-router-dom";
import "./Form.css";
const Newuser=()=> {
	const history=useNavigate();
    const [email,setEmail]=useState('');
    const[name,setName]=useState('');
    const [password,setPassword]=useState('');
	const [cpassword,setcPassword]=useState('');

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/register",{
                email,password,cpassword
            })
			.then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="nonexist"){
					history("/Home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch{
            console.log(e);
        }
    }
    return(
        <div className="form">
            <h1>Register</h1>
            <form action="POST">
                <p>Email: &nbsp;&nbsp;&nbsp;
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your Email" name="email" id="email"></input>
                </p>
                <p>Username: &nbsp;&nbsp;&nbsp;
                <input type="email" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter a username" name="name" id="name"></input>
                </p>
                <p>
                Password:&nbsp;&nbsp;&nbsp;
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" name="pass" id="password"></input>
                <br></br></p>
                <p>
                Confirm Password:&nbsp;&nbsp;&nbsp;
				<input type="password" onChange={(e)=>{setcPassword(e.target.value)}} placeholder="Confirm password" name="pass" id="cpassword"></input>
                <br></br></p>
                <input type="submit" onClick={submit}></input>
            </form>
            <br></br>
            <p>OR</p>
            <br></br>
            Old User ? <Link to="/login"><u>login Here</u></Link>
        </div>
    )
}

export default Newuser