export const validateInput = (inputComponent, setInput) => {
    let inputVal = inputComponent.current.value;
    const maxLength = inputComponent.current.max.length;

    const hasInvalidChars = new RegExp('[^0-9.]').test(inputVal);
    const hasDec = inputVal.split(".").length-1;
    const hasInvalidDec = inputVal.charAt(0) === '.' || inputVal.charAt(maxLength) === '.';

    // remove last entered character if invalid
    if(
        (!hasDec && inputVal.length > maxLength) ||     // no decimal & input length greater than max
        (hasDec && inputVal.length > maxLength+1) ||    // decimal & input length greater than max + decimal
        (hasDec > 1) ||                                 // more than 1 decimal
        hasInvalidDec ||                                // decimal at beginning or end of input string
        hasInvalidChars                                 // character other than # or decimal
    ) {
        inputComponent.current.value = inputVal.slice(0, -1);
        setInput(inputComponent.current.value);
    }
    // set value to max if input string exceeds max
    else if(inputVal > 1500) {
        inputComponent.current.value = 1500;
        setInput(inputComponent.current.value);
    }
}

export const validateInputByStep = (inputComponent, step) => {
    let inputVal = inputComponent.current.value;
    if(!inputVal % step === 0) {
        return inputVal -= inputVal % (step * 2);;
    }
}