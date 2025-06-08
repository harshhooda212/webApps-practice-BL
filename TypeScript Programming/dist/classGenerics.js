class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const stringBox = new Box("A String");
console.log(stringBox.getValue());
const numberBox = new Box(123);
console.log(numberBox.getValue());
//# sourceMappingURL=classGenerics.js.map