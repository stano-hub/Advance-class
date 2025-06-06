let rawName = "     diana karanja  ";
let rawEmail = "DianaKaranja@Email.com   ";
let course = "Introduction to coding";
let age1=17
// Remove spaces
let name = rawName.trim();
let email = rawEmail.trim().toLowerCase();

// Make name first letter uppercase (simple way)
let firstName = name[0].toUpperCase() + name.slice(1, 6);
let lastName = name[6].toUpperCase() + name.slice(7);

// Join full name
let fullName = firstName + lastName;

// Change course name
let newCourse = "Introduction to JavaScript";

// Initials
let initials = firstName[0] + "." + lastName[0] + "."      

// Print results
console.log("Welcome, " + fullName + "!")
console.log("Email: " + email)
console.log("Course: " + course.toUpperCase())
console.log("Your email address has " + email.length + " characters.")
console.log("First name: " + firstName)
console.log("Updated course: " + newCourse)
console.log("Initials: " + initials)
