// without class
var user1 = { firstName: "John", lastName: "Doe", age: 25 };
var user2 = { firstName: "Jane", lastName: "Smith", age: 30 };
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(getUserAge(user1));
console.log(greetUser(user2));
console.log(getUserAge(user2));
