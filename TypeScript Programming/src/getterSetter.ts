class Student {
    private _name:string;

    constructor(name: string){
        this._name=name;
    }
    get name():string{
        return this._name;
    }

    set name(value: string){
        if(value.length<3){
            console.log("Name is too short.");
        }else{
            this._name=value;
        }
    }
}

const student = new Student("John");
console.log(Student.name);
student.name="al";
student.name="Alice";
console.log(Student.name);