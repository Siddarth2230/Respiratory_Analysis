import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
import "./Form.css";
import Card from "./card";
import log from './log.png';
var a;
const AudioPage = () => {
  const [data, setData] = useState({});
  const [detected, setDetected] = useState();
  const [buttonName, setButtonName] = useState("Play");
  const [audio, setAudio] = useState();
  const [name1, setName1] = useState();

  useEffect(() => {
    setDetected(null);
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };
  var onFileChange = (event) => {
    setDetected(null);
    setData(event.target.files[0]);
    if (event.target.files[0]) {
      setAudio(URL.createObjectURL(event.target.files[0]));
    }
  };

  const headers = {
    "content-type": "multipart/form-data",
  };

  const detect = () => {
    const formData = new FormData();
    formData.append("file", data);
    var config = {
      method: "post",
      url: "https://f43c-117-249-249-102.in.ngrok.io/object-to-json",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDetected(response.data);
        setName1(JSON.stringify(response.data)["disease_lstm"]["prediction"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form">
    <div>
      <h3>UPLOAD A .WAV FILE!</h3>
      <img src={log} width="350" height="190"  alt="normal rate"></img><br></br><br></br>
      <input type="file" onChange={onFileChange} />
      <br></br>
      <br></br>
      <Button onClick={handleClick}>{buttonName}</Button>
      <br></br>
      <br></br>
      <Button onClick={detect}>Upload and Predict!</Button>
      <br></br><br></br>
    </div>
    <div>
    {detected && (
        <>
        <Card name={"LSTM"} detected_disease={detected.disease_lstm} />

        <Card name={"GRU"} detected_disease={detected.disease_gru} />
        </>
      )}
      </div>
    </div>
  );
};

export default AudioPage;