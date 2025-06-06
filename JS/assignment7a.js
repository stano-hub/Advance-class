class Car{
    constructor(name,color,capacity,engineType,fuelType,origin){
        this.name=name
        this.color=color
        this.capacity=capacity
        this.engineType=engineType
        this.fuelType=fuelType
        this.origin=origin
    }
    // method
    drive(){
        console.log(`${this.name} drives , Vroom! Vroom!`)
    }

    info(){
        console.log(`This is a ${this.name},  color;${this.color},  it has a passenger capacity of ${this.capacity}, an engine type of ${this.engineType} and uses ${this.fuelType} to move. Made in ${this.origin}`)
    }
    hoot(){
        console.log(`${this.name} hoots , peep! Peep!`)
    }

    ignite(){
        console.log(`${this.name}, ignites silently `)
    }

}

let car1=new Car("Mercedes","Golden",4,"V6 Engine","diesel","London")
car1.info()
car1.drive()
car1.hoot()
car1.ignite()

let car2=new Car("Jeep","Red",6,"V8 Engine","Petrol","Russia")
car2.info()
car2.drive()
car2.hoot()
car2.ignite()
