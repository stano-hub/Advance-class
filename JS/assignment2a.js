//create an Array of number use ,map  to triple each number
let numbers = [1, 2, 5, 7, 2, 3, 8];
// filter to extract numbers which are equal or grreater than 8
let tripledNumbers = numbers.map(n => n * 3);
let greaterThanOrEqualToEight = tripledNumbers.filter(n => n >= 8);
console.log(tripledNumbers);
console.log(greaterThanOrEqualToEight);
