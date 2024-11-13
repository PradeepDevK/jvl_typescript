// with access modifiers
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person("Alice", 30);
console.log(person.getName());
console.log(person.getAge());
person.setName("John");
person.setAge(25);
console.log(person.getName());
console.log(person.getAge());
