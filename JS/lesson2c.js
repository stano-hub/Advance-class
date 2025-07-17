// destructuring lets unpack values from arrays or properties from objects into distinct variables
let user={
    username: "Janee Doe ",
    email: "janie@yahoo.com",
    dob:12/12/1999,
    isActive: true,
    password: "qwerty123"


};
let {username, email, isActive} = user; // destructuring
console.log(username); 
console.log(email); 
console.log(isActive); 
