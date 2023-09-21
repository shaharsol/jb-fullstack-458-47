const displayUserLocation = () => {
    // traditional function callback
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
    })

    // arrow function callback
    navigator.geolocation.getCurrentPosition(position => console.log(position))

    // we can always use an existing named function as a callback
    navigator.geolocation.getCurrentPosition(console.log)
}

const notifyMe = () => {
    const message = prompt('please enter the message to notify you with');
    const seconds = +prompt('in how many seconds');

    // wrong usage, we must pass a callback, not an invocation!
    // setTimeout(alert(message), seconds * 1000) // (callback, when) when is measured in milliseconds
    setTimeout(() => alert(message), seconds * 1000) // (callback, when) when is measured in milliseconds
} 

// setTimeout(callback, when)
// setInterval(callback, how-often)

// example: this will log 'hi' in the console EVERY second
// setInterval(() => console.log('hi'), 1000)

// how to get current time in javascript
// const now = new Date();
// console.log(now.toLocaleTimeString());

// your exercise:
// display a clock on the page including seconds
// hint: use setInterval
