const chalk = require("chalk")
const summation = {
    //adding numbers
    addition(a, b, c){
        let total = a + b + c;
        console.log("The sum of the numbers is: " + chalk.red(total))
    }
};
module.exports = summation;