import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarbellPlatesCalculator from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BarbellPlatesCalculator />
  </React.StrictMode>,
  document.getElementById('barbellPlatesCalcRoot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
