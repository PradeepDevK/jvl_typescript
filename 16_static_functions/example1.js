// without static
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return User;
}());
var user = new User("Alice", 30);
console.log(user.isAdult());
