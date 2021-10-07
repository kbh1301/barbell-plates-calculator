/*
-- input step should be double the lowest weight of metric array (utils.js)
-- timer after timing will round input down to nearest step
-- input border flash red and shake animation when invalid or is auto-corrected

if(!value % 2.5 === 0)
                    console.log('error');
*/

import React, { useState, useEffect, Fragment } from 'react';
import './WeightInput.css';
import bbIcon from '../img/bbIcon.png'

const WeightInput = ({ setInput, setMetric }) => {
    const metric = '';

    const validateInput = (input) => {
        let val = input.value;
        const maxLength = input.max.length;

        const hasInvalidChars = new RegExp('[^0-9.]').test(val);
        const hasDec = val.split(".").length-1;
        const hasInvalidDec = val.charAt(0) === '.' || val.charAt(maxLength) === '.';

        // remove last entered character if invalid
        if(
            (!hasDec && val.length > maxLength) ||  // no decimal & input length greater than max
            (hasDec && val.length > maxLength+1) || // decimal & input length greater than max + decimal
            (hasDec > 1) ||                         // more than 1 decimal
            hasInvalidDec ||                        // decimal at beginning or end of input string
            hasInvalidChars                         // character other than # or decimal
        )
            input.value = val.slice(0, -1);
        // set value to max if input string exceeds max
        else if(val > 1500)
            input.value = 1500;

        // returns input string to app.js state
        setInput(input.value);
    }

    return(
        <Fragment>
            <div className="inputRow flex items-center justify-center">
                <img className="bbIcon" src={bbIcon}/>
                <div className="inputRow2">
                <form>
                    <input
                        id="weightInput"
                        type="number"
                        min="0"
                        max="1500"
                        step="2.5"
                        required
                        onInput={(e) => validateInput(e.target)}
                    />
                    <label alt="Weight" placeholder="Weight"></label>
                </form>
                <div>lbs</div>
                </div>
            </div>
        </Fragment>
    );
}

export default WeightInput;