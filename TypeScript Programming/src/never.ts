//Represent values that never occur , such as functions that always throw an error or never return.
function throwError(message: string): never {
    throw new Error(message);
}