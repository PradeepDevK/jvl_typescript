var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("Calling add method with arguments ".concat(a, " and ").concat(b));
        var result = a + b;
        console.log("Result: ".concat(result));
        return result;
    };
    Calculator.prototype.sub = function (a, b) {
        console.log("Calling sub method with arguments ".concat(a, " and ").concat(b));
        var result = a - b;
        console.log("Result: ".concat(result));
        return result;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.sub(5, 3));
