"use strict";
// IIFE
// Immediately Invoked Function expression
(() => {
    const messageButton = document.getElementById('messageButton');
    messageButton.addEventListener('click', () => {
        console.log(getMessage());
    })

    function displayMessage() {
        alert(getMessage());
    }
    
    const getMessage = () => {
        return 'hello from messages.js';
    }
    
    function getNumber() {
        return 24;
    }
})();

