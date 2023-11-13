import Kitten from './kitten.js';

// let kitten: Kitten;
// kitten = new Kitten();

//    object       class
const kitten: Kitten = new Kitten('mitzi', 'white', 12, 12);
// console.log(kitten.weight); // error because weight is private
kitten.display();
kitten.sleep();
kitten.eat();


const kitten2: Kitten = new Kitten('kitzi', 'orange', 1, 2);
//    object       class
kitten2.display();
kitten2.sleep();
kitten2.eat();
