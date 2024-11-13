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

let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());


let stringStack = new Stack<string>();
stringStack.push("Alice");
stringStack.push("Bob");
console.log(stringStack.pop());