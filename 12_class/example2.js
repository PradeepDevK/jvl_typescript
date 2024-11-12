//with class
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
// creating instances
var userOne = new User("John", "Doe", 25);
var userTwo = new User("Jane", "Smith", 30);
console.log(userOne.greet());
console.log(userOne.getAge());
console.log(userTwo.greet());
console.log(userTwo.getAge());
