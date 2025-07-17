const fs = require('fs');
const chalk = require('chalk');

data = fs.readFileSync('input.txt')
console.log(chalk.bgBlue(data.toString()));
console.log("Program ended...........")


    