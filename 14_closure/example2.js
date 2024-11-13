// With closure
function createCounter() {
    var counterValue = 0;
    return {
        increment: function () {
            counterValue++;
        },
        getValue: function () {
            return counterValue;
        }
    };
}
var counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
