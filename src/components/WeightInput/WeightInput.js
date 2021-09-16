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
import React, { Fragment, useEffect, useRef, useState } from 'react';
import './WeightInput.css';
import WeightDisplay from './WeightDisplay';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles((theme) => ({
    root: {'& > *': { margin: theme.spacing(1), width: '25ch'}}}));

const WeightInput = () => {
    const [weightVal, setWeightVal] = useState('');
    const classes = useStyles();

    return(
        <Fragment>
            <div className="flex items-center justify-center">
                <FitnessCenterIcon />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Weight" variant="outlined" type="number"
                    InputProps={{ endAdornment: <InputAdornment position="end">lbs</InputAdornment> }}
                    onChange={(event) => {setWeightVal(event.target.value)}}/>
                </form>
            </div>
            <WeightDisplay weightVal={weightVal} />
        </Fragment>
    );
}

export default WeightInput;