


const stringUtils = {

    toUpperCase(str) {
        return str.toUpperCase();
    },
    toLowerCase(str) {
        return str.toLowerCase();
    },
    // Function to count letters in a string
    countLetters(str) {
        let newStr =str.trim();
        return newStr.length; 
    }


}
module.exports = stringUtils;