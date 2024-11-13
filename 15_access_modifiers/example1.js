// without class modifiers
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User("Alice", 30);
console.log(user.name);
console.log(user.age);
user.name = "Bob";
user.age = 25;
console.log(user.name);
console.log(user.age);
