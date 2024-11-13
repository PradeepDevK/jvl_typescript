// without static properties
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let totalUsers = 0;

function createUser(name) {
    totalUsers++;
    return new User(name);
}

let user1 = createUser("Alice");
let user2 = createUser("Bob");

console.log(user1.getName());
console.log(user2.getName());
console.log(totalUsers);