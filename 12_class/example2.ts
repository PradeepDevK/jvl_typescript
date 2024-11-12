//with class
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

// creating instances
let userOne = new User("John", "Doe", 25);
let userTwo = new User("Jane", "Smith", 30);


console.log(userOne.greet());
console.log(userOne.getAge());

console.log(userTwo.greet());
console.log(userTwo.getAge());