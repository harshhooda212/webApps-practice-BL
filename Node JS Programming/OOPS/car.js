class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(myCar.name + " is " + myCar.year + " year old.");
console.log("Age of my car is: " + myCar.age() + " years.");

