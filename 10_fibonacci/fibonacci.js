const fibonacci = function(index) {

    if(index < 0) {
        return "OOPS";
    }

    if(typeof index !== "number") {
        index = parseInt(index);
    }

    let sequence = [0, 1];

    for (let i = 2; i <= index; i++) {
        sequence[i] = sequence[i-1] + sequence[i-2];
    }

    return sequence[index];


};

// Do not edit below this line
module.exports = fibonacci;
