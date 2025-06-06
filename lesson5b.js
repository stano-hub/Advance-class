// functions 
// this is a block of code that performs a specific task
//functions uses keyword function followed by the name and the block of code is enclosed using curly braces {}
// for the function to execute you must call / invoke the function

//1.function with parameters 
function greet (name){
    console.log("good morning "+name)
}
greet("john")//function calling
greet("paul")

function sum (num1,num2){
    let sum = num1+num2
    console.log(`The sum of ${num1} and ${num2} is ${sum}`)
}
// when calling a function with parameters the number of arguments must match the number of parameters passed inside the funcion
sum(20,49)

function difference (num1,num2,num3){
    let subtraction = num3-num2
    let finalSubtraction = num1 - subtraction
    console.log(`The difference between ${num3} and ${num2} is ${subtraction}`)
    console.log(`The difference between ${subtraction} and ${num1} is ${finalSubtraction}`)
}
difference(10,20,70)

// functions using destructuring as a parameter
function studentInfo({name,subject,cat1,cat2}){
    let total = cat1+cat2
    console.log(`${name} scored ${total} marks in ${subject}`)
}
studentInfo({name:"Mary",subject:"Maths",cat1:60,cat2:75})
