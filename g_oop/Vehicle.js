// Create a class called Vehicle
class Vehicle {
    // constructor (keyword) - only allows one constructor
    // this (keyword)
    // a contructor is called when a new instance of the class is created
    constructor(make, model, year, distanceTraveled) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.distanceTraveled = distanceTraveled ? distanceTraveled : 0;
    }

    // method common to all vehicles
    travel(distance) {
        this.distanceTraveled += distance; // cumulatively add distances passed in
        // console.log(this.make, this.model, this.year, this.getTotalDistance());
    }

    // method to get the total distance travelled
    getTotalDistance() {
        return this.distanceTraveled;
    }
}

const myTransport = new Vehicle("Toyota", "Raize", "2022");
myTransport.travel(100); // 100km travelled
myTransport.travel(50); // another 50km travelled

// console.log(myTransport.make, myTransport.model, myTransport.year);
// console.log(`My transport has travelled a total of ${myTransport.getTotalDistance()} km.`);

// module.exports = Vehicle; // class Vehicle is exported

export default Vehicle;