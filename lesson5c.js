// arrow function
//modern js functions that reduce line of code

const greetings=()=>{
    console.log("Hello World")
}
greetings()

// arrow with parameters
const greet=(name)=>{
    console.log("Good Morning "+name)
}
greet("Job")

const sum=(num1,num2)=>{
    let sum = num1+num2
    console.log(`The sum of ${num1} and ${num2} is ${sum}`)
}
sum(30,70)
