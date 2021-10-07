import React, { Fragment } from 'react';
import './WeightInput.css'
import barbell_shaftImg from '../img/barbell_shaft.png'
import barbell_sleeveCapImg from '../img/barbell_sleeveCap.png'
import barbell_sleeveImg from '../img/barbell_sleeve.png'
import barbell_sleeveCutImg from '../img/barbell_sleeveCut.png'
import plateImg from '../img/plate.png'

const BarbellVisualization = ({ inputArray }) => {
    // for each plate in inputArray, create img component
    const buildPlateImgs = () => inputArray.map((plate) => {
        return(
            <div className="flexCell">
                <img className="plateImg" src={plateImg} alt="" style={{height:`${plate.plateSize}%`}}/>
            </div>
        );
    });
    
    // complete BarbellVisualization component
    return (
        <div className="BarbellVisualization">
            <div className="flexCell">
                <img className="barbellImg" src={barbell_shaftImg} alt="" />
                <img className="barbellImg" src={barbell_sleeveCapImg} alt="" />
            </div>
            <div className="flexCell">
                { // if inputArray is empty, return empty sleeve; else, return plateStack weights and shortened sleeve
                !inputArray.length
                    ? <img className="barbellImg" src={barbell_sleeveImg} alt="" />
                    :   <Fragment>
                            {buildPlateImgs()}
                            <img className="barbellImg" src={barbell_sleeveCutImg} alt="" />
                        </Fragment>
                }
            </div>
        </div>
    );
}
export default BarbellVisualization;