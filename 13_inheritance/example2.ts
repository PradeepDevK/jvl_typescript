// With Inheritance
class Person {
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


class _User extends Person {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }
}

class _Admin extends Person {

    role: string;

    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age);
        this.role = role;
    }

    greet() {
        return `Hello, ${this.firstName} ${this.lastName}, Role ${this.role}`;
    }

    manageUser() {
        return `Managing Users with Role ${this.role}`;
    }
}

let userOne = new _User('John', 'Doe', 25);
let adminOne =  new _Admin('Jane', 'Smith', 30, 'admin');

console.log(userOne.greet());
console.log(userOne.getAge());

console.log(adminOne.greet());
console.log(adminOne.getAge());
console.log(adminOne.manageUser());