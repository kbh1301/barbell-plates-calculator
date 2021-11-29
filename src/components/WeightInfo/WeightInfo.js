import React from 'react';
import './WeightInfo.css';

const WeightInfo = ({ countObj, metric }) => {
    // sort countObj; for each element, add info component
    const buildPlateInfo = () => Object.keys(countObj)
        .sort((a,b) => b - a)
        .map((count, i) => {
            return (
                <tr key={i}>
                    <td style={{textAlign: "left"}}>{countObj[count]}</td>
                    <td>{count} {metric ? "kg" : "lb"}</td>
                </tr>
            )
        });

    // complete WeightInfo
    return(
        <div className="weight-info">
            <table className="weight-info-number">
                <thead>
                    <tr>
                        <th colSpan="2">PER SIDE:</th>
                    </tr>
                </thead>
                <tbody>
                    {buildPlateInfo()}
                </tbody>
            </table>
        </div>
    );
}

export default WeightInfo;