/*
-- use 202.5 for demo weight
- fix CSS naming (use hyphens instead of camel)
- fade in visualizations
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import WeightInput from './components/WeightInput/WeightInput';
import BarbellVisualization from './components/BarbellVisualization';
import WeightInfo from './components/WeightInfo';
import { getInputArray, getCountObj } from './utils.js';

function App() {
  const [metric, setMetric] = useState(false);
  const [input, setInput] = useState(202.5);
  const [inputArray, setInputArray] = useState([]);
  const [countObj, setCountObj] = useState({});

  // update inputArray whenever metric or input state changes
  useEffect(() => {
    setInputArray(getInputArray(metric, input));
  },[metric, input]);

  // update countObj whenever inputArray state changes
  useEffect(() => {
    setCountObj(getCountObj(inputArray));
  },[inputArray]);

  return (
    <div className="App">
      <div className="content">
        <div className="weightDisplay">
          <BarbellVisualization inputArray={inputArray} metric={metric} />
          <WeightInfo countObj={countObj} />
        </div>
        <WeightInput setInput={setInput} setMetric={setMetric} />
      </div>
    </div>
  );
}

export default App;
