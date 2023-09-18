function doSomething () {
    func1(function() { alert('hi'); })
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