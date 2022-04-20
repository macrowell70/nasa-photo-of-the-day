import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY } from "./constants";

import Apod from './Apod'


function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res => {
      setInfo(res.data)
    }) .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">

      <Apod title={info.title} date={info.date} copyright={info.copyright} hdurl={info.hdurl} explanation={info.explanation} />
      
    </div>
  );
}

export default App;
