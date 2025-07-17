// sring operations/methods
let name="   Alice Wanjiku  "
let age=25

// trimming - is removing white spaces before and after a word
let trimmedname=name.trim()
console.log(name)
console.log(trimmedname)

// bidding a variable
console.log("My name is",trimmedname)
console.log("My name is "+trimmedname)
console.log(`My name is ${trimmedname}`)

// converting strings to uppercase/lowercase
// let upperName=trimmedname.toUppercase()
console.log(trimmedname.toUpperCase())

// l0wer
let lowername=trimmedname.toLowerCase()
console.log(lowername)

// slicing slice(start,end)
// when slicig(start)
let slicedName= trimmedname.slice(3,7)
console.log(slicedName)
console.log(trimmedname.slice(7))

// // includes(substring)--- checks if the char exists in the string responde is boolean true/false
// console.log(trimmedname.includes("z"))

// // index of  OFchar
// console.log(trimmedname.indexOf("W"))

// // REPLACES THE (old,new)
// let updateName=trimmedname.replace("Wanjiku","Aoko")
// console.log(updateName)

// // cheking the length (can be used in an Array,string)
// console.log(updateName.length)
// console.log(trimmedname.length)

// // converts a string to a array
// console.log(trimmedname.split())