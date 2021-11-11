import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import WeightInput from './components/WeightInput/WeightInput';
import BarbellVisualization from './components/BarbellVisualization';
import WeightInfo from './components/WeightInfo';
import { useInitialRender } from './utils/utils.js';
import { getStep, getInputArray, getCountObj, metricConversion } from './utils/calculations';
import { validateInput, validateInputByStep } from './utils/validators.js';

function BarbellPlatesCalculator() {
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
    if(input) {
      inputComponent.current.value = input;

      if(!initialRender) validateInput(inputComponent, setInput);

      // validate input by step when user stops typing for set time
      const delayDebounce = setTimeout(() => {
        inputComponent.current.value = validateInputByStep(inputComponent, step);
      }, 2000)
      return () => clearTimeout(delayDebounce)
    }
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
    <div className="barbell-plates-calculator">
      <div className="content">
        <div className="weight-display">
          <BarbellVisualization inputArray={inputArray} metric={metric} />
          <WeightInfo countObj={countObj} metric={metric} />
        </div>
        <WeightInput step={step} setInput={setInput} setMetric={setMetric} inputComponent={inputComponent} />
      </div>
    </div>
  );
}

export default BarbellPlatesCalculator;
