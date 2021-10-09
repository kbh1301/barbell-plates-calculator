/*
- fix CSS naming (use hyphens instead of camel)
- fade in visualizations
- update utils to update value when metric is changed

- convert css on-input-focus color changes to js and compare speeds
*/

/*
WEIGHTINPUT
-- input step should be double the lowest weight of metric array (utils.js) * 2
-- timer after timing will round input down to nearest step
-- input border flash red and shake animation when invalid or is auto-corrected

if(!value % lowestStepValue === 0)
  // code to change input state to rounded-down-to-nearest-step value

-- add step arrows beside metric toggle
*/
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import WeightInput from './components/WeightInput/WeightInput';
import BarbellVisualization from './components/BarbellVisualization';
import WeightInfo from './components/WeightInfo';
import { useInitialRender } from './utils/utils.js';
import { getStep, getInputArray, getCountObj, metricConversion } from './utils/calculations';
import { validateInput, validateInputByStep } from './utils/validators.js';

function App() {
  // determines if current render is the first
  const initialRender = useInitialRender();
  
  const [metric, setMetric] = useState(false);
  const [input, setInput] = useState(202.5);
  const [inputArray, setInputArray] = useState([]);
  const [countObj, setCountObj] = useState({});
  const [step, setStep] = useState(1.25);
  const inputComponent = useRef();

  // update & validate inputComponent when input state changes
  useEffect(() => {
    inputComponent.current.value = input;

    if(!initialRender) validateInput(inputComponent, setInput);

    // validate input by step when user stops typing for set time
    const delayDebounce = setTimeout(() => {
      inputComponent.current.value = validateInputByStep(inputComponent, step);
    }, 2000)
    return () => clearTimeout(delayDebounce)
  },[input]);

  // update inputComponent and step when metric state changes
  useEffect(() => {
    if(!initialRender) {
      const inputVal = metricConversion(metric, inputComponent);
      setInput(inputVal);
      setStep(getStep(metric));
    }
  },[metric]);

  // update inputArray when metric or input state changes
  useEffect(() => {
    setInputArray(getInputArray(metric, input));
  },[metric, input]);

  // update countObj when inputArray state changes
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
        <WeightInput step={step} setInput={setInput} setMetric={setMetric} inputComponent={inputComponent} />
      </div>
    </div>
  );
}

export default App;
