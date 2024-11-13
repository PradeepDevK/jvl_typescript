// with static properties
// without static properties
class Person {
    name: string;
    static totalUsers: number = 0;

    constructor(name: string) {
        this.name = name;
        Person.totalUsers++;
    }

    getName() {
        return this.name;
    }

    static getTotalUsers() {
        return Person.totalUsers;
    }
}

const person1 = new Person("Alice");
const person2 = new Person("Bob");

console.log(person1.getName());
console.log(person2.getName());
console.log(Person.getTotalUsers());