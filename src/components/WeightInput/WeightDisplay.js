import React, { Fragment, useEffect, useRef, useState } from 'react';
import './WeightInput.css'
import barbellImg from '../../img/barbell.png'
import plateImg from '../../img/plate.png'

const WeightDisplay = ({ weightVal }) => {
    const calcWeights = () => {
            // if metric === lbs then <----------------------------------------------
        const plates = [ 45, 35, 25, 10, 5, 2.5, 1.25 ];
            // if metric === kgs then <----------------------------------------------
            // plates array  <----------------------------------------------
        // initializes image array with empty barbell
        let results = [ <td><img src={barbellImg} alt="" /></td> ];
        let curWeight = weightVal;

        curWeight -= 45; // subtract standard bar weight
        curWeight /= 2; // get one side of bar

        // add appropriate plates to results
        plates.forEach((plate, i) => {
            // checks if current plate fits within current weight
            let wholePlate = curWeight / plate;
            // calculate plate image size based on amount in plates array
            let plateSize = 100 - i/(plates.length - 1) * 75;

            // component to be added to results array
            const plateComponent =
                <td>
                    <img className="plateImg" src={plateImg} alt="" style={{height:`${plateSize}%`}}/>
                    <div className="weightDisplayNumber" >{plate}<br/></div>
                </td>;

            // determines how many (if any) of the current plate can be used and adds component to result
            if(wholePlate >= 1){
                for(let i = wholePlate; i >= 1; i--) {
                    // adds plates to right side of bar
                    results.push( plateComponent );
                    // adds plates to left side of bar
                    results.unshift( plateComponent );
                    curWeight -= plate;
                }
            }
        });

        if(curWeight > 0) results.push(<p>{curWeight}</p>); // leftover weight

        return results;
    }
    return (
        <div className="weightDisplay">{calcWeights(weightVal)}</div>
    );
}
export default WeightDisplay;