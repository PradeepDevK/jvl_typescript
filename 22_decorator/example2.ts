function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} method with arguments ${args.join(',')}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    }
}

class Calc {
    @logMethod
    add(a: number, b: number) {
        const result = a + b;
        return result;
    }

    @logMethod
    sub(a: number, b: number) {
        const result = a - b;
        return result;
    }
}

const _calc = new Calc();
console.log(_calc.add(2, 3));
console.log(_calc.sub(5, 3));


// execute by following command
// tsc .\example2.ts -experimentalDecorators --target es5