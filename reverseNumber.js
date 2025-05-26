function reverseNumber(value){
    return parseInt(value.toString().split('').reverse().join(''));
}
console.log(reverseNumber(12345));