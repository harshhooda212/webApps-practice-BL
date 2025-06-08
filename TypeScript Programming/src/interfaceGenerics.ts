interface Result<T>{
    data: T;
    error: string|null;
}

const successResult: Result<string>={
    data: "Operation was successful",
    error: null,
}
const failureResult: Result<number > = {
    data: 0,
    error: "Operation failed",
}

console.log(successResult);
console.log(failureResult);
