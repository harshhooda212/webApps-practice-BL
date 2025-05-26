let obj1={RegNO:2111028010212,Name:"Harsh",Age:22};
let obj2={RegNo:2111028010160,Name:"Aryan",Age:22};
let merged = { ...obj1, ...obj2,...obj1};
console.log(merged);