function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ", Age: ").concat(user.age));
}
var user1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    middleName: "Francis"
};
var user2 = {
    firstName: "Pradeep",
    lastName: "Raj"
};
console.log(greetUser(user2));
logUserDetails(user1);
