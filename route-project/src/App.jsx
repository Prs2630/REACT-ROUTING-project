import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Mounting from "./Mounting";
import Unmounting from './Unmounting';
import Updating from "./Updating";
import "./App.css"


function App() {
  return (
    <div className="wrapper">
      <center>
      <div style={{backgroundColor: 'grey', margin: '', padding: '', textAlign: 'center'}}>
      <h1>Component Life Cycle</h1>
      </div>
      <BrowserRouter>
      <div style={{backgroundColor: 'aqua', margin: '', padding: '', textAlign: 'center'}}>
        <nav>
        
            <span><Link to="/mounting">Mounting</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><Link to="/unmounting">Unmounting</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><Link to="/updating">Updating</Link></span>
          
        </nav>
        </div>
    
      <Routes>
        <Route path="/mounting" element={<Mounting />} />


        <Route path="/unmounting" element={<Unmounting />} />


        <Route path="/updating" element={<Updating />} />


      </Routes>
    </BrowserRouter>
    </center>
    </div>

  );
}

export default App;