import "./App.css";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Newuser";
import Home from "./components/Home";
import Temp from "./components/temp";
import Upload from "./components/AudioUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Temp />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/upload" element={<Upload />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}
 
export default App;