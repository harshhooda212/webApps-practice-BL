function printLength(value: string | number){
    if(typeof value === 'string'){
        console.log(`String length: ${value.length}`);
    }else {
        console.log(value);
    }
}