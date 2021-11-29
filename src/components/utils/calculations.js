// determines array of available plates based on kilograms or pounds
const platesFromMetric = (metric) => {
    return (
        // if metric is true, return kg array; else, return lb array
        metric
            ? [ 20, 15, 10, 5, 2.5, 1.25, 0.5 ] 
            : [ 45, 35, 25, 10, 5, 2.5, 1.25 ]
    )
}

// calculate optimal plates based on user input and store results in array
// includes sizing calculation property for img height
const calcWeight = (plates, metric, weightVal) => {
    // sort plates array by highest to lowest
    plates.sort((a,b) => b - a);

    // initialize array to be returned
    let inputArray = [];

    // tracks remaining weight throughout calculation
    let curWeight = weightVal;

    metric ? curWeight -= 20 : curWeight -= 45; // subtract standard bar weight
    curWeight /= 2; // get one side of bar

    // iterates through plates array, adding plates to inputArray if within curWeight
    plates.forEach((plate, i) => {
        // checks how many times plate fits evenly within curWeight
        let wholePlate = curWeight / plate;
        // calculate plate image size based on amount of available plates in plates array
        let plateSize = 100 - i/(plates.length - 1) * 75;

        // determines how many (if any) of the current plate can be used and adds component to result
        if(wholePlate >= 1){
            for(let i = wholePlate; i >= 1; i--) {
                // add plate object to inputArray
                inputArray.push({
                    plateWeight: plate,
                    plateSize: plateSize
                });
                // reduce curWeight by this plate's value
                curWeight -= plate;
            }
        }
    });
    return inputArray;
}

export const getInputArray = (metric, input) => {
    return (calcWeight(platesFromMetric(metric), metric, input));
}

export const getCountObj = (inputArray) => {
    const counts = {};

    // create array of plateWeight values
    inputArray.map((plate) => plate.plateWeight)
    // retrieve count for each plate and add to counts object
    .forEach((i) => {
        counts[i] = (counts[i] || 0) + 1;
    });

    return counts;
}

export const getStep = (metric) => {
    return Math.min(...platesFromMetric(metric));
}

export const metricConversion = (metric, inputComponent) => {
    let inputVal = inputComponent.current.value;
    if(metric) {
        inputVal /= 2.205;
        inputVal -= inputVal % (0.5 * 2);
    } else {
        inputVal *= 2.205;
        inputVal -= inputVal % (1.25 * 2);
        inputVal += (1.25 * 2);
    }
    return inputVal;
}