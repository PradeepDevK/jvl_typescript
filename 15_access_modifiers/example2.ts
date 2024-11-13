// with access modifiers
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName() {
        return this.name;
    }

    public getAge() {
        return this.age;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        this.age = age;
    }
}

const person = new Person("Alice", 30);
console.log(person.getName());
console.log(person.getAge());

person.setName("John");
person.setAge(25);

console.log(person.getName());
console.log(person.getAge());