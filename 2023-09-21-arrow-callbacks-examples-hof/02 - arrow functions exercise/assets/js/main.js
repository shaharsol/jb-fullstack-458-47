function doSomething () {
    func1(function() { alert('hi'); })
    func1(() => alert('hi'));

    func2(function() { alert('hi'); return 'hello'; })
    func3(function(x) { alert(x); })
    func4(function(x, y) { alert(x + y); })
    func5(function(x, y , z) { alert(x * y * z); })
    func6(function() { return 42; })
    func7(function(a, b) { return a + b; })
    func8(function(a, b) { return a > b ? a : b; })
    func9(function(x, y , z) { alert(x); alert(y); alert(z);})
    func10(function() { return {name: 'betty', age: 1.5, color: 'gray'}; })
}

// function() { alert('hi'); }
function func1 (callback) {
    callback();
}

// function() { alert('hi'); return 'hello'; }
function func2 (callback) {
    console.log(callback());
}

// function(x) { alert(x); }
function func3 (cb) {
    cb('hello from func3');
}

// function(x, y) { alert(x + y); }
function func4 (callback) {
    callback(10, 20);
}

// function(x, y , z) { alert(x * y * z); }
function func5 (fn) {
    fn (2, 3, 4);
}

// function() { return 42; }
function func6 (f) {
    console.log(f());
}

// function(a, b) { return a + b; }
function func7 (callback) {
    const result = callback(2, 3); 
    console.log(result) // expects 5
}

// function(a, b) { return a > b ? a : b; }
function func8 (callback) {
    const max = callback(100, 200);
    console.log(max) // expects 200
}

// function(x, y , z) { alert(x); alert(y); alert(z);}
function func9 (callback) {
    callback(1,2,3);
}

// function() { return {name: 'betty', age: 1.5, color: 'gray'}; }
function func10 (cb) {
    const dog = cb();
    console.log(dog.name); // expects betty
    console.log(cb()) //  expects the entire dog json
}

/*
==============================================================
*/

function doSomething2 () {
    func11(function () { console.log('hello') });
    func12(function (a, b) { console.log(a + b) });
    func13(function (a, b) { return a > b ? a : b});
    func13(function (a, b) { 
        // const result = a > b ? a : b;
        let result;
        if ( a > b ) {
            result = a;
        } else {
            result = b;
        }
        return result;
    });
    func14(function () { return {name: 'stick', price: 20} });
    func15(function () { return 100; }, function () { return 1; });
}

function func11 (callback) {
    callback();
}

function func12 (callback) {
    callback(10, 20);
}

function func13 (callback) {
    const max = callback(100, 200);
    console.log(max);
}

function func14 (callback) {
    const product = callback();
    console.log(`product name is ${product.name} and product price is ${product.price}`);
}

function func15 (callback1, callback2) {
    const rabbitSpeed = callback1();
    const turtleSpeed = callback2();
    if (rabbitSpeed > turtleSpeed) {
        console.log('rabbit is faster')
    } else {
        console.log('turtle is faster')
    }
}