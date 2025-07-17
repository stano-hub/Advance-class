// class and object
// a class is a blueprint / template which has properties(features/characteristics) and methods(functions/behaviours)
//we use keyword class to declare a class
class Dog{
    // contructor is used to initialize the properties 
    // we use the keyword constructor
    constructor(name,breed){
        // we use "this." to access properties of an instance
        this.name=name
        this.breed=breed
    }
    // method
    bark(){
        console.log(`${this.name} says Woof! Woof!`)
    }

    info(){
        console.log(`${this.name}, is a ${this.breed} `)
    }

}

// creating an object
//an object is an instance of a class
let dog1=new Dog("Buddy","Golden Retriver")
dog1.bark()
dog1.info()

let dog2=new Dog("Whisky","German Sherpherd")
dog2.bark()
dog2.info()