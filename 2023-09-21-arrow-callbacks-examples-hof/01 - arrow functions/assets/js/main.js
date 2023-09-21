function invoke() {
    // regular invocation
    func1(function () { console.log('hello'); });
    // invocation wil arrow function
    // func1(() => { console.log('hello'); console.log('hello2')});
    // if my callback contains only one command, we can omit the "{","}" and the ";"
    func1(() => console.log('hello'));

    // same as previous example, only this time i have some arguments
    func2(function(a, b, c) { console.log(`sum is ${a + b + c}`); });
    func2((a, b, c) => console.log(`sum is ${a + b + c}`));

    func3(function(height) { console.log(`height is ${height}`); })
    // if argument list contains only a single argument, we can omit the "(", ")"
    // func3((height) => { console.log(`height is ${height}`); });
    func3(height => console.log(`height is ${height}`));

    func4(function () { return 42; });
    func4(() => 42)

    func5((num) => { return num * 2; })
    func5(num => num * 2)
}

function func1 (callback) {
    callback();
}

function func2 (callback) {
    callback(10, 20, 30);
}

function func3 (callback) {
    callback(30);
}

function func4 (callback) {
    const result = callback();
    console.log(`result: ${result}`);
}

function func5 (callback) {
    const result = callback(10);
    console.log(`10 * 2 = ${result}`);
}