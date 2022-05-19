import React, { Fragment, useEffect, useRef, useState } from 'react';
import '../WeightInput/WeightInput.scss'
import barbell_shaftImg from '../img/barbell_shaft.png'
import barbell_sleeveImg from '../img/barbell_sleeve.png'
import barbell_sleeveCutImg from '../img/barbell_sleeveCut.png'
import plateImg from '../img/plate.png'

const BarbellVisualization = ({ inputArray }) => {
    // for each plate in inputArray, create img component
    const buildPlateImgs = () => inputArray.map((plate, i) => {
        return(
            <div className="flex-cell">
                <img key={i} className="plate-img" src={plateImg} alt=""
                    style={{height:`${plate.plateSize}%`}}
                />
            </div>
        );
    });
    
    // complete BarbellVisualization component
    return (
        <div className="barbell-visualization-container">
            <div className="flex-cell">
                <img className="barbell-img" src={barbell_shaftImg} alt="" />
            </div>
            { // if inputArray is empty, return empty sleeve; else, return plateStack weights and shortened sleeve
            !inputArray.length
                ? <img className="barbell-img" src={barbell_sleeveImg} alt="" />
                :   <Fragment>
                        {buildPlateImgs()}
                        <div className="flex-cell">
                            <img className="barbell-img" src={barbell_sleeveCutImg} alt="" />
                        </div>
                    </Fragment>
            }
        </div>
    );
}
export default BarbellVisualization;