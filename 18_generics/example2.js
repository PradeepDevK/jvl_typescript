// With Generics
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
var stringStack = new Stack();
stringStack.push("Alice");
stringStack.push("Bob");
console.log(stringStack.pop());
