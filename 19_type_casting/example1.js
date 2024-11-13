var jsonData = '{ "name": "Alice", "age": 30 }';
var user = JSON.parse(jsonData);
console.log("Name ".concat(user.name, ", Age ").concat(user.age));
