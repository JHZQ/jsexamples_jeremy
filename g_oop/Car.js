// const Vehicle = require("./Vehicle.js");
import Vehicle from "./Vehicle.js";

// Create a child class from Vehicle class
class Car extends Vehicle { // Inherits the vehicle class
    constructor(make, model, year) {
        super(make, model, year); // super (keyword) - refers to the parent class
        this.airbag = true; // defines a new property because this property is unique to just cars
    }

    // a static method of a class can be used without instatiation
    static welcomeStatement(msg){
        console.log(msg);
    }

    // Polymorphism
    drive(distance) {
        super.travel(distance); // Abstraction - drive method hides the implementation (travel) method from Vehicle.js
        console.log(`Driving complete. Status: ${this.airbag ? 'Safety Check Passed' : 'Airbag absent'}`);
    }

    // checkSafetyFeature() is only found in Car class
    checkSafetyFeature() {
        return this.airbag = true ? this.airbag = "yes" : null;
    }

    // ? IMPLICIT INHERITANCE methods inherited here in Car class (from Vehicle class) include:
    // - travel()
    // - getTotalDistance(); - Abstraction, where we do not see the implementation of getTotalDistance(), but we can still invoke it
    // - distanceTraveled - Encapsulation, where the state of the property is managed by the parent class
}

// instantiate a new instance of a Car called myNewCar

// static method used to call upon a class directly (perform initialisation that does not affect the class itself)
Car.welcomeStatement("Welcome Car Owner.");

const myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(100);
console.log(`Does my new car have safety features: ${myNewCar.checkSafetyFeature()}`);
console.log(`My new car is driven: ${myNewCar.getTotalDistance()}`);

// module.exports = Car;
export default Car;