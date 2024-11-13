// without static
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        return age >= 18;
    };
    return Person;
}());
console.log(Person.isAdult(30), "30");
console.log(Person.isAdult(15), "15");
