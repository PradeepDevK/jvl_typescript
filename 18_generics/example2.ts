// With Generics
class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }
}

let numberstack = new Stack<number>();
numberstack.push(1);
numberstack.push(2);
console.log(numberstack.pop());


let stringstack = new Stack<string>();
stringstack.push("Alice");
stringstack.push("Bob");
console.log(stringstack.pop());