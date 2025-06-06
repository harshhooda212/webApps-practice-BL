function greetAll(greeting: string, ...names: string[]): string{
    return `${greeting} ${names.join(",")}`;
}
console.log(greetAll("hello","alice","ravi"));
