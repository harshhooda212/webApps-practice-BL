class Cars{
    public brand: string;

    constructor(brand: string){
        this.brand=brand;
    }
    public drive(): void{
        console.log(`${this.brand}`);
    }
}
const car = new Cars("Toyota");
console.log(car.brand);
car.drive();