/*
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

import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import './WeightInput.css'
import barbellImg from '../../img/barbell.png'
import plateImg from '../../img/plate.png'

const useStyles = makeStyles((theme) => ({
    root: {'& > *': { margin: theme.spacing(1), width: '25ch'}}}));

const calcWeights = (weightVal) => {
    const plates = [ 45, 35, 25, 10, 5, 2.5, 1.25 ];
    // initializes image array with empty barbell
    let results = [ <td><img src={barbellImg} alt="" /></td> ];
    let curWeight = weightVal;

    curWeight -= 45; // subtract standard bar weight
    curWeight /= 2; // get one side of bar

    // add appropriate plates to results
    plates.forEach(plate => {
        let wholePlate = curWeight / plate;
        if(wholePlate >= 1){
            for(let i = wholePlate; i >= 1; i--) {
                // adds plates to right side of bar
                results.push( <td><img src={plateImg} alt="" /><div>{plate}</div></td> );
                // adds plates to left side of bar
                results.unshift( <td><img src={plateImg} alt="" /><div>{plate}</div></td> );
                curWeight -= plate;
            }
        }
    });

    if(curWeight > 0) results.push(<p>{curWeight}</p>); // leftover weight

    return results;
}

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
            <div className="weightDisplay">{calcWeights(weightVal)}</div>
        </Fragment>
    );
}

export default WeightInput;