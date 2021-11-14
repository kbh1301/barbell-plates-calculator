import React, { Fragment } from 'react';
import './WeightInput.scss';
import './Input.scss';
import './Toggle.scss';
import bbIcon from '../img/bbIcon.png'

const WeightInput = ({ step, setInput, setMetric, inputComponent }) => {

    // step button functionality
    const stepCalc = (id) => {
        let inputVal = Number(inputComponent.current.value);

        if(id === "step-up")
            inputVal += step * 2;
        else if(id === "step-down")
            inputVal -= step * 2;
            
        setInput(inputVal);
    }

    return(
        <Fragment>
            <div className="input-row">
                <img className="bb-icon" src={bbIcon}/>
                <input
                    id="metric-input"
                    type="checkbox"
                    onChange={(e) => setMetric(e.target.checked)}
                />
                <div className="input-wrapper">
                    <form>
                        <input
                            id="weight-input"
                            ref={inputComponent}
                            min="45"
                            max="1500"
                            required
                            defaultValue="202.5"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <label for="weight-input">Weight</label>
                    </form>
                    <div className="step-btn-wrapper" onClick={(e) => stepCalc(e.target.id)}>
                        <button id="step-up" className="step-btn">&#9650;</button>
                        <button id="step-down" className="step-btn">&#9660;</button>
                    </div>
                    <label for="metric-input" class="metric-toggle">
                        <span class="toggle-handler"/>
                    </label>
                </div>
            </div>
        </Fragment>
    );
}

export default WeightInput;