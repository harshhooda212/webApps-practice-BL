interface Calculator{
    add(a: number,b: number): number;
    subtract(a: number, b: number): number;
}

const simpleCalc:Calculator ={
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    }
};
console.log(`Addition: ${simpleCalc.add(5, 3)}`); // Output: Addition: 8
console.log(`Subtraction: ${simpleCalc.subtract(5, 3)}`); // Output: Subtraction: 2