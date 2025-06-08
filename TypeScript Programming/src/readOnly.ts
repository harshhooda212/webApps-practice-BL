interface Person2 {
  readonly name1: string;  
    age: number;
    isStudent: boolean;
}
const per: Person2 = {
  name1: "Alice",
  age: 22,
  isStudent: true
};
// per.name1 = "Bob"; // Error: Cannot assign to 'name1' because it is a read-only property
console.log(`${per.name1} is ${per.age} years old. Student: ${per.isStudent}`);