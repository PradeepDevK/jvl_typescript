// without inheritance
class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }
}

class Admin {
    firstName: string;
    lastName: string;
    age: number;
    role: string;

    constructor(firstName: string, lastName: string, age: number, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }

    greet() {
        return `Hello, ${this.firstName} ${this.lastName}, Role ${this.role}`;
    }

    getAge() {
        return this.age;
    }

    manageUser() {
        return `Managing Users with Role ${this.role}`;
    }
}

let user1 = new User('John', 'Doe', 25);
let admin1 =  new Admin('Jane', 'Smith', 30, 'admin');

console.log(user1.greet());
console.log(user1.getAge());

console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUser());