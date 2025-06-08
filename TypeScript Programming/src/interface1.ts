interface user{
    name: string;
    age: number;
    isActive: boolean;
}
const user1: user ={
    name: "Harsh",
    age: 24,
    isActive: true,
}
console.log(`${user1.name} is ${user1.age} years old. Active: ${user1.isActive}`);  
