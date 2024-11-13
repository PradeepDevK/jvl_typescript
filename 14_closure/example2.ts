// With closure
function createCounter() {
    let counterValue = 0;

    return {
        increment: function() {
            counterValue++;
        },
        getValue: function() {
            return counterValue;
        }
    };
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());