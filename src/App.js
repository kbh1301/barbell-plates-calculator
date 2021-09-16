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
*/
import React, { useState } from 'react';
import './App.css';
import WeightInput from './components/WeightInput';
import BarbellVisualization from './components/BarbellVisualization';
import WeightInfo from './components/WeightInfo';

function App() {
  const [weightVal, setWeightVal] = useState(0);

  return (
    <div className="App">
      <div className="content">
        <WeightInput setWeightVal={setWeightVal} />
        <div className="weightDisplay">
          <BarbellVisualization weightVal={weightVal} />
          <WeightInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
