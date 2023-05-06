import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            console.log("Reached after matching");
            history("/home", { state: { id: email } });
          }
          else if (res.data === "not exist") {
            alert("User has not registered")
          }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="form">
      <h1>Login</h1>
      <form action="POST">
        Email:&nbsp;&nbsp;&nbsp;
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id="email"
        /><br></br>
        <br></br>
        Password: &nbsp;&nbsp;
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id="password"
        />
        <br></br>
        <br></br>
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/register">SignUp Page</Link>
    </div>
  );
}

export default Login;
