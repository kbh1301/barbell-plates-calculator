/*
-- input step should be double the lowest weight of metric array (utils.js)
-- timer after timing will round input down to nearest step
-- input border flash red and shake animation when invalid or is auto-corrected

if(!value % 2.5 === 0)
                    console.log('error');

-- add step arrows beside metric toggle
*/

import React, { useState, useEffect, Fragment } from 'react';
import './WeightInput.scss';
import './Input.scss';
import './Toggle.scss';
import bbIcon from '../../img/bbIcon.png'

const WeightInput = ({ setInput, setMetric }) => {
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
            <div className="inputRow">
                <img className="bbIcon" src={bbIcon}/>
                <input
                    id="metric-input"
                    type="checkbox"
                    onChange={(e) => setMetric(e.target.checked)}
                />
                <div className="input-wrapper">
                    <form>
                        <input
                            id="weight-input"
                            type="number"
                            min="0"
                            max="1500"
                            step="2.5"
                            required
                            defaultValue="202.5"
                            onInput={(e) => validateInput(e.target)}
                        />
                        <label for="weight-input">Weight</label>
                    </form>
                    <label for="metric-input" class="metric-toggle">
                        <span class="toggle-handler"/>
                    </label>
                </div>
            </div>
        </Fragment>
    );
}

export default WeightInput;