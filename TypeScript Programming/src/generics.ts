function identity<T>(value: T): T{
    return value;
}
console.log(identity("Hello, World!")); // Output: "Hello, World!"
console.log(identity(42)); // Output: 42