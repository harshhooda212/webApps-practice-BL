function greet1(name: string = "Guest"){
    return `Hello, ${name}`;
}
console.log(greet1());
console.log(greet1("Harsh"));