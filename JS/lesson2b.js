//object
//an object in react is an equivalent to a dictionary 
//we can use curly braces for an object using coma
// we can use key value pair
//it can hold any data type

let student = {
    name:"John Doe",
    age: 20,
    grade: "A",
    isEnrolled: true,


}
console.log(student);
//accessing object 
let studentName = student.name; // dot notation
let studentAge = student["age"]; // bracket notation
console.log(studentName); // John Doe
console.log(studentAge); // 20

