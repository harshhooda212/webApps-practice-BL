function capital(str){
    return str.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join('');
}
console.log(capital("hello world"));    