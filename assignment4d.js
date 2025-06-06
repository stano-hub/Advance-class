let subjects={
    "Math": 30,
    "English": 65,
    "kiswahili": 70,
}
// calculate the grade based on the average score using if and else statement 
let {Math, English, kiswahili} = subjects; // destructuring

let average = (Math + English + kiswahili) / 3;

console.log("Average score: " + average);

if (average >=60 ){
    console.log("Grade: A");
    
}
else if (average >= 50 && average < 60) {
    console.log("Grade: B");
    
}
else if (average >= 40 && average < 50) {
    console.log("Grade: C");
    
}
else if (average >= 30 && average < 40) {
    console.log("Grade: D");
    
}
else if (average < 30) {
    console.log("Grade: E");
    
}
else {
    console.log("Invalid average score");
    
}
