// without static

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static isAdult(age: number) {
        return age >= 18;
    }
}

console.log(Person.isAdult(30), "30");
console.log(Person.isAdult(15), "15");