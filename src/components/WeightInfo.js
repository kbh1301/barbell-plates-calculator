import './WeightInfo.css';

const WeightInfo = ({ countObj }) => {
    // sort countObj; for each element, add info component
    const buildPlateInfo = () => Object.keys(countObj)
        .sort((a,b) => b - a)
        .map((i) => {
            return (
                <tr>
                    <td style={{textAlign: "left"}}>{countObj[i]}</td>
                    <td>{i} lb</td>
                </tr>
            )
        });

    // complete WeightInfo
    return(
        <table className="weightInfoNumber">
            <thead>
                <tr>
                    <th colSpan="2">PER SIDE</th>
                </tr>
            </thead>
            <tbody>
                {buildPlateInfo()}
            </tbody>
        </table>
    );
}

export default WeightInfo;