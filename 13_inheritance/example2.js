var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// With Inheritance
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var _User = /** @class */ (function (_super) {
    __extends(_User, _super);
    function _User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return _User;
}(Person));
var _Admin = /** @class */ (function (_super) {
    __extends(_Admin, _super);
    function _Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    _Admin.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, ", Role ").concat(this.role);
    };
    _Admin.prototype.manageUser = function () {
        return "Managing Users with Role ".concat(this.role);
    };
    return _Admin;
}(Person));
var userOne = new _User('John', 'Doe', 25);
var adminOne = new _Admin('Jane', 'Smith', 30, 'admin');
console.log(userOne.greet());
console.log(userOne.getAge());
console.log(adminOne.greet());
console.log(adminOne.getAge());
console.log(adminOne.manageUser());
