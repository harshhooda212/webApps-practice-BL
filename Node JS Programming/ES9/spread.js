const person = { name: "Alice", age: 25 };
const cloned = { ...person };

console.log(cloned); 

const updated = { ...person, age: 26 };
console.log(updated); 
