interface Alive {
    age: number;
    getHeartRate(): number;
};

class Kitten {
    age: number;
    color: string;
    getHeartRate() {
        return 1;
    };
}

class Dog {
    age: number;
    color: string;
    getHeartBit() {
        return 1;
    };
}

class Bird implements Alive {
    age: number;
    color: string;
    beakLength: number;
    getHeartRate() {
        return 1;
    };
    getHeartBeat() {
        return 10;
    };
    fly() {

    };
}

function getSomethingAlive(): Alive {
    // worked
    // return {
    //     age: 2,
    //     getHeartRate: () => 1
    // }

    // didn't work, because color is wrong
    // return {
    //     age: 2,
    //     getHeartRate: () => 1,
    //     color: 'brown'
    // }

    // worked
    // return new Kitten();

    // didn't work
    //return new Dog();

    // const test: Alive = {
    //     age: 2,
    //     getHeartRate: () => 1,
    //     color: 'brown'
    // }

    return new Bird();

}

// const animal = getSomethingAlive();
// animal.fly();
// console.log(animal.age);

const bird = new Bird();
bird.fly();
const alive: Alive = bird;
alive.age;
alive.getHeartRate()

