import './WeightInfo.css';

const WeightInfo = ({ countObj }) => {
    // sort countObj; for each element, add info component
    const buildPlateInfo = () => Object.keys(countObj)
        .sort((a,b) => b - a)
        .map((i) => {
            return <div>{countObj[i]} x {i} lb</div>
        });

    // complete WeightInfo
    return(
        <div className="weightInfoNumber">
            PER SIDE<br/>
            {buildPlateInfo()}
        </div>
    );
}

export default WeightInfo;