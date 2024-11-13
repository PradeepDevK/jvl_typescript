var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var totalUsers = 0;
function createUser(name) {
    totalUsers++;
    return new User(name);
}
var user1 = createUser("Alice");
var user2 = createUser("Bob");
console.log(user1.getName());
console.log(user2.getName());
console.log(totalUsers);
