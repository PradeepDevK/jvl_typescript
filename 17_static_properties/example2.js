// with static properties
// without static properties
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        Person.totalUsers++;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.getTotalUsers = function () {
        return Person.totalUsers;
    };
    Person.totalUsers = 0;
    return Person;
}());
var person1 = new Person("Alice");
var person2 = new Person("Bob");
console.log(person1.getName());
console.log(person2.getName());
console.log(Person.getTotalUsers());
