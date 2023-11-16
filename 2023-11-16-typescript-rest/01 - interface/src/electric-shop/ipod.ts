import Device from "./device.js";
import Electric from "./electric.js";
import Player from "./player.js";

export class Ipod extends Device implements Player, Electric{
    play() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
    pause() {
        throw new Error("Method not implemented.");
    }
    resume() {
        throw new Error("Method not implemented.");
    }
    shuffleType: string;
}