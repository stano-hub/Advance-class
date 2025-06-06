// Superclass
class Shape {
    area() {
        console.log("Area formula not defined for generic shape");
    }
}

// Subclass 1
class Circle extends Shape {
    constructor(radius) {
        super(); 
        this.radius = radius;
    }

    area() {
        let area = 22/7 * this.radius * this.radius;
        console.log(`Area of Circle: ${area}`);
    }
}

// Subclass 2
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        let area = this.length * this.width;
        console.log(`Area of Rectangle: ${area}`);
    }
}

// Subclass 3
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        let area = 1/2 * this.base * this.height;
        console.log(`Area of Triangle: ${area}`);
    }
}

// Subclass 4
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    area() {
        let area =this.length * this.length
        console.log(`Area of Square: ${area}`);
    }
}

let myCircle = new Circle(7);
myCircle.area();
let myRectangle = new Rectangle(10, 5);
myRectangle.area();
let myTriangle = new Triangle(6, 4);
myTriangle.area();
let mySquare = new Square(10)
mySquare.area()

