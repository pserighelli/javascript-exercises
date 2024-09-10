const removeFromArray = function(array, ...args) {

    let uniqueArray = [...new Set(array)];
    
    for (const remove of args) {

        if (uniqueArray.includes(remove) == false)
            continue

        let index = uniqueArray.indexOf(remove);
        uniqueArray.splice(index, 1);

        }

    return uniqueArray;

};

// Do not edit below this line
module.exports = removeFromArray;