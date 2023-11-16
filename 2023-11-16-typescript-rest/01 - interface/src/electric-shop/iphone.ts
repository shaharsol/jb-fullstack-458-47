import Device from "./device.js";
import Electric from "./electric.js";

export default class IPhone extends Device implements Electric{
    memory: number;
    call() { };
}