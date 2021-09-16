import React, { Fragment } from 'react';
import './WeightInput.css'
import barbell_shaftImg from '../img/barbell_shaft.png'
import barbell_sleeveCapImg from '../img/barbell_sleeveCap.png'
import barbell_sleeveImg from '../img/barbell_sleeve.png'
import barbell_sleeveCutImg from '../img/barbell_sleeveCut.png'
import plateImg from '../img/plate.png'

const BarbellVisualization = ({ weightVal, metric }) => {
    const calcWeights = () => {
        // array of available plates in kilograms or pounds
        const plates =
            metric ? // if metric has value, return kg array
                [ 20, 15, 10, 5, 2.5, 1.25, 0.5] 
            : // else, return lb array
                [ 45, 35, 25, 10, 5, 2.5, 1.25 ];

        // sort plates by highest to lowest
        plates.sort((a,b) => b - a);

        // initializes array that holds all plate images and values
        let plateStack = [];

        // tracks remaining weight throughout calculation
        let curWeight = weightVal;

        curWeight -= 45; // subtract standard bar weight
        curWeight /= 2; // get one side of bar

        // iterates through plates array, adding plates to plateStack if within curWeight
        plates.forEach((plate, i) => {
            // checks how many times plate fits evenly within curWeight
            let wholePlate = curWeight / plate;
            // calculate plate image size based on amount in plates array
            let plateSize = 100 - i/(plates.length - 1) * 75;

            // component to potentially be added to imgArray array
            const plateComponent =
                <div className="flexCell">
                    <img className="plateImg" src={plateImg} alt="" style={{height:`${plateSize}%`}}/>
                    <div className="weightDisplayNumber">{plate}<br/></div>
                </div>;

            // determines how many (if any) of the current plate can be used and adds component to result
            if(wholePlate >= 1){
                for(let i = wholePlate; i >= 1; i--) {
                    // add plate to plateStack
                    plateStack.push( plateComponent );
                    curWeight -= plate;
                }
            }
        });

        // complete image array to be returned for component
        let imgArray = [
            // barbell shaft and sleeve cap images
            <div className="flexCell">
                <img className="barbellImg" src={barbell_shaftImg} alt="" />
                <img className="barbellImg" src={barbell_sleeveCapImg} alt="" />
            </div>,
            // barbell sleeve and plate images
            <div className="flexCell">
                {!plateStack.length ? // if plateStack is empty, return empty sleeve
                    <img className="barbellImg" src={barbell_sleeveImg} alt="" />
                : // else, return plateStack weights and shortened sleeve
                    <Fragment>
                        {plateStack}
                        <img className="barbellImg" src={barbell_sleeveCutImg} alt="" />
                    </Fragment>}
            </div> 
        ];
        if(curWeight > 0) imgArray.push(<div className="">{curWeight}</div>); // leftover weight
        return imgArray;
    }
    // completed BarbellVisualization component
    return (
        <div className="BarbellVisualization">{calcWeights(weightVal)}</div>
    );
}
export default BarbellVisualization;