// button1
const button1 = document.getElementById('button1');
button1.addEventListener('click', function () {
    console.log(this); // this = under which object do you run?
    button1.style.backgroundColor = 'green';
    // this.style.backgroundColor = 'green';
})

// many unidentified buttons
function paintGreen () { // a function that paints the current context in green
    this.style.backgroundColor = 'green';
}
const buttons = document.querySelectorAll('#buttonsDiv > button');
buttons.forEach(button => button.addEventListener('click', paintGreen))

// button2
const button2 = document.getElementById('button2');
button2.addEventListener('click', function () {
    console.log(this); // this is the button
    setTimeout(function () {
        console.log(this); // this is the window
        this.style.backgroundColor = 'green';
    }, 1000)
})

// button3 (this & that old way)
const button3 = document.getElementById('button3');
button3.addEventListener('click', function () {
    console.log(this); // this is the button
    const that = this; // now that contains the button context
    setTimeout(function () {
        console.log(this); // this is the window
        that.style.backgroundColor = 'green';
    }, 1000)
})

// button4 (bind)
const button4 = document.getElementById('button4');
button4.addEventListener('click', function () {
    console.log(this); // this is the button
    setTimeout(function () {
        console.log(this); // this is the button
        this.style.backgroundColor = 'green';
    }.bind(this) , 1000)
})

// button5 (arrow function)
const button5 = document.getElementById('button5');
button5.addEventListener('click', function () {
    console.log(this); // this is the button
    setTimeout(() => {
        console.log(this); // this is the button
        this.style.backgroundColor = 'green';
    } , 1000)
})

// button6 (arrow function all the way)
const button6 = document.getElementById('button6');
console.log(this) // this is the window
button6.addEventListener('click', () => {
    console.log(this); // this is the window
    setTimeout(() => {
        console.log(this); // this is the window
        this.style.backgroundColor = 'green';
    } , 1000)
})

// button7 (arrow function, no setTimeout)
const button7 = document.getElementById('button7');
console.log(this) // this is the window
button7.addEventListener('click', () => {
    console.log(this); // this is the window
    this.style.backgroundColor = 'green';
})


// array, argument, variable
// variable - memory cell, can contain anything
const v = 1;
const z = '1';
const y = [1, 2, 3, 4];
// array [] is an ordered list of variables, sharing the same memory cell
// argument is a variable sent to a function
function f(a, b) {
    return a + b;
}
// a is an argument,
// b is an argument
// function bar() {}
// async function bar() {}


/*
downloadFile('http://cvnxcmvnmxcv.com/a/b')
    .then(file => copyToCDN(file))
    .then(fileUrl => console.log(fileUrl))
    .catch(e => console.err(e))
*/




