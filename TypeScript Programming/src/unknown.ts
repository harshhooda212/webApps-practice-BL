// Similar to any, but safer as it requires type checking before usage.

let values: unknown="Hello";
if(typeof values === "string"){
    console.log(values.toUpperCase());  
}