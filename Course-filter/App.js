// import './App.css';
import Checkbox from './checkbox';
import Selectpage from './Selectpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Documents from './Documents';
import React, { useState } from 'react';


function App() {
  const [addedItems, setAddedItems] = useState([]);
  return (
    <div className="App">
    <Documents></Documents>

    </div>
  );
}

export default App;
