/*
-- use 202.5 for demo weight
- limit input to numbers
- limit input to certain range (ex 500 lbs)
- disallow decimal inputs
- handle inputs that don't end in 5 or 2.5 or 0
  - add leftover weight to display
  - add warning message
- limit plate images height based on barbell image height
  - scale each plate size based on percentage compared to biggest size in array
- stack same size plates with slight offset?
- add metric toggle to WeightInput
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import WeightInput from './components/WeightInput';
import BarbellVisualization from './components/BarbellVisualization';
import WeightInfo from './components/WeightInfo';
import { getInputArray, getCountObj } from './utils.js';

function App() {
  const [metric, setMetric] = useState('');
  const [input, setInput] = useState(0);
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
        <WeightInput setInput={setInput} setMetric={setMetric} />
        <div className="weightDisplay">
          <BarbellVisualization inputArray={inputArray} metric={metric} />
          <WeightInfo countObj={countObj} />
        </div>
      </div>
    </div>
  );
}

export default App;
