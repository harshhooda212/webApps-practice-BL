class Box<T> {
private value: T;


constructor(value: T) {
this.value = value;
}

getValue(): T {
return this.value;
}
}

const stringBox = new Box<string>("A String");
console.log(stringBox.getValue()); // Output: A String

const numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // Output: 123