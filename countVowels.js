function countvowels(str){
    return (str.match(/[aeiou]/gi)|| []).length;
}
console.log(countvowels("I am a great listener!!"));