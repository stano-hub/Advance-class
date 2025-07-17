const chalk =require('chalk');
    
const welcome = {
    sayHello(){
console.log(chalk.blue('Welcome to the application!'));
},


currDate:new Date(),
currTime: new Date().toLocaleTimeString()
};

module.exports = welcome;