const reverseString = function reverseString(text) {
    let word = '';
    for (let i = text.length; i > 0; i--){
        word += text[i - 1];
    }
    return word;
};

/* BEST ANSWER:
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

*/

// Do not edit below this line
module.exports = reverseString;
