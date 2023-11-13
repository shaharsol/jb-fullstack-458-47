import Bike from "./bike.js";
import Boat from "./boat.js";
import Car from "./car.js";
import Truck from "./truck.js";
import Vehicle from "./Vehicle.js";

const car = new Car('volvo', 'xc60', 'white', 1998, 5555555, 7);
const boat = new Boat('malibu', 'white fast', 'white', 2015, 5555555, 2);
const bike = new Bike('ktm', 'xc480', 'orange', 2025, 5555555, false);
const truck = new Truck('mac', 'mac1000', 'orange', 2025, 5555555, 10000);

// const vehicle = new Vehicle('mac', 'mac1000', 'orange', 2025, 5555555); // error because Vehicle is abstract


car.makeSound();
// vehicle.display();
// bike.display();
// truck.display();
