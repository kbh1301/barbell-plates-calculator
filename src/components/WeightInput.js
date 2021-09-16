import React, { Fragment } from 'react';
import './WeightInput.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles((theme) => ({
    root: {'& > *': { margin: theme.spacing(1), width: '25ch'}}}));

const WeightInput = ({ setWeightVal }) => {
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
        </Fragment>
    );
}

export default WeightInput;