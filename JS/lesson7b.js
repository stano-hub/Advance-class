// Abstruction
// hiding complex details
// users only need to know how to use something not how it works
class CoffeeMachine{
    #startEngine(){
        console.log("Heating water ...")
    }
    brew(){
        console.log("Starting coffee ...")
        this.#startEngine()
        console.log("coffee is ready!")
    }
}
let coffee=new CoffeeMachine()
coffee.brew()