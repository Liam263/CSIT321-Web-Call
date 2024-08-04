import { useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CallInterface from "./CallInterface";


function App() {
  // const navigate =
  return (
    
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/call" element= {<CallInterface/>}/>
      </Routes>
  );
}

export default App;
