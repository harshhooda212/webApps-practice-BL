function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,3,4,4,4,4,3,2,5]));