const reverseString = function(word) {

    let wordArray = word.split('');
    let wordArrayReverse = wordArray.reverse();
    let wordReverse = wordArrayReverse.join('');
    return wordReverse;

};

// Do not edit below this line
module.exports = reverseString;
