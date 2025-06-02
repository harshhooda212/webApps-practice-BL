function outer() {
  let outerVar = "I’m outer";

  function inner() {
    console.log(outerVar); 
  }

  inner();
}

outer(); 
