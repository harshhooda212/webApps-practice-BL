
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}


const person1: Person = {
  name: "Alice",
  age: 22,
  isStudent: true
};

console.log(`${person1.name} is ${person1.age} years old. Student: ${person1.isStudent}`);
