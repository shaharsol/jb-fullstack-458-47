import Device from "./device.js";
import Electric from "./electric.js";

export default class IPhone extends Device implements Electric {
    memory: number;
    call() {
        console.log(this.simId); // IPhone can access this, because it is 
        // labeled as protected, and Iphone extends Device.
        this.simId = 'fsdkfklsdhfsdjkfhk'; // if i want to prevent descendant
        // classes from manipulating, i need to use the readonly modifier
    };
}