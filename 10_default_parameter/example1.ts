let concateStrings = function(a: string, b: string, c: string = "cat") {
    return a + b + c;
}

console.log(concateStrings("a", "b", "c"));
console.log(concateStrings("a", "b"));