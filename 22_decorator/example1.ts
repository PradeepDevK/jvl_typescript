class Calculator {
    add(a: number, b: number) {
        console.log(`Calling add method with arguments ${a} and ${b}`);
        const result = a + b;
        console.log(`Result: ${result}`);
        return result;
    }

    sub(a: number, b: number) {
        console.log(`Calling sub method with arguments ${a} and ${b}`);
        const result = a - b;
        console.log(`Result: ${result}`);
        return result;
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.sub(5, 3));