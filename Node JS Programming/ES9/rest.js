const user = { id: 1, name: "Bob", age: 30 };
const { name, ...rest } = user;

console.log(name); 
console.log(rest); 
