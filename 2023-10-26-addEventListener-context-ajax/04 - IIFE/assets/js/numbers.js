"use strict";
// IIFE
// Immediately Invoked Function expression
(() => {
    const numbersButton = document.getElementById('numbersButton');
    numbersButton.addEventListener('click', () => {
        console.log(getNumber());
    });
    
    function getNumber() {
        return 42;
    }
    
    function getMessage() {
        return 'hello from numbers.js';
    }
})();

(() => {
    console.log(420);
})();
