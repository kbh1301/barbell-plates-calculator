/*
- limit input to numbers
- limit input to certain range (ex 500 lbs)
- disallow decimal inputs
- handle inputs that don't end in 5 or 0
  - results = ''
  - if last digit = 5 || 0 then results += 'Bar' and continue calculations

Ex weight is 180
180 - 45 (Bar) = 135
135 / 2 (Each side) = 67.5
*/

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import './WeightInput.css'

const useStyles = makeStyles((theme) => ({
    root: {'& > *': { margin: theme.spacing(1), width: '25ch'}}}));

const calcWeights = (weightVal) => {
    const plates = [ 45, 35, 25, 10, 5, 2.5 ];
    let results = 'Bar';
    let curWeight = weightVal;

    curWeight -= 45; // subtract standard bar weight
    curWeight /= 2; // get one side of bar

    // add appropriate plates to results
    plates.forEach(plate => {
        let wholePlate = curWeight / plate;
        if(wholePlate >= 1){
            for(let i = wholePlate; i >= 1; i--) {
                results += ` + ${plate}`;
                curWeight -= plate;
            }
        }
    });

    console.log(curWeight); // leftover weight

    return results;
}

const WeightInput = () => {
    const [weightVal, setWeightVal] = useState('');
    const classes = useStyles();

    return(
        <div>
            <div className="flex items-center justify-center">
                <FitnessCenterIcon />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Weight" variant="outlined"
                    InputProps={{ endAdornment: <InputAdornment position="end">lbs</InputAdornment> }}
                    onChange={(event) => {setWeightVal(event.target.value)}}/>
                </form>
            </div>
            {calcWeights(weightVal)}
        </div>
    );
}

export default WeightInput;