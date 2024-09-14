const sumAll = function(firstNum, lastNum) {

    let sum = 0;

    if (firstNum > lastNum) {
        let array = [firstNum, lastNum];
        firstNum = array[1];
        lastNum = array[0];
    }

    if (firstNum < 0 || typeof firstNum !== 'number' || Number.isSafeInteger(firstNum) === false || lastNum < 0 || typeof lastNum !== 'number' || Number.isSafeInteger(firstNum) === false) {
        return 'ERROR';
    }

    for (let i = 0; i <= (lastNum - firstNum); i++) {
        sum = sum + (firstNum + i);
    }

return sum;

};

// Do not edit below this line
module.exports = sumAll;
