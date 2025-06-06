// Array methods 
let numbers = [1, 2, 5,7,2, 3,8]
console.log(numbers);

// map
let doublenum=numbers.map(n=> n*2);
console.log(doublenum);

// filter
let evens=numbers.filter(n=> n%2==0);
console.log(evens); 

// find (first element that matches)
let founditem=numbers.find(n=> n>2);
console.log(founditem);



