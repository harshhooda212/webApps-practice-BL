function sumArray(arr){
    return arr.reduce((acc,cur)=>acc+cur,0);
}
console.log(sumArray([1,2,3,4,5])); // 15