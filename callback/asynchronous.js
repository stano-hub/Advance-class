const fs = require('fs');
const chalk = require('chalk');

fs.readFile('input2.txt',function(err, data){
   console.log(chalk.bgYellow.whiteBright(data.toString()));

});
console.log(chalk.red("This line of code (process)will execute fisrt"));
