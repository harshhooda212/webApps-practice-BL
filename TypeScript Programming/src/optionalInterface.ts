interface customer{
    name: string;
    age: number;
    isActive?: boolean; 
}
const customer1: customer = {
    name: "Alice",
    age: 30,
    // isActive is optional, so it can be omitted
};
console.log(`${customer1.name} is ${customer1.age} years old. Active: ${customer1.isActive ?? "not specified"}`);