;
class Kitten {
    getHeartRate() {
        return 1;
    }
    ;
}
class Dog {
    getHeartBit() {
        return 1;
    }
    ;
}
class Bird {
    getHeartRate() {
        return 1;
    }
    ;
    getHeartBeat() {
        return 10;
    }
    ;
    fly() {
    }
    ;
}
function getSomethingAlive() {
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
const alive = bird;
alive.age;
alive.getHeartRate();
