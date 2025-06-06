// parameters in TypeScript can be optional
function greet(name: string, age?: number): string{
    if(age){
        return `Hello, ${name}. Your are ${age} years old.`;

    }
    return `Hello,${name}`;

}

console.log(greet('Harsh'));
console.log(greet('Harsh',24));