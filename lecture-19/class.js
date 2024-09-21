// Classes in Javascript
class Student {
    //contructor
    constructor(_name,_mssv,_major,_birthday) {
        this.name = _name; //defined class public properties 
        this.mssv = _mssv; // be able to access
        this.major = _major; 
        this.birthday = _birthday;
    }
    //private property 
    #university = "PTIT"; // defined private property start with a #
    //method
    //private method
    #seftIntroduce = () => {
        return `Hello, my fullname is ${this.name}, I'm ${this.#university} student`;
    }
    //func call above private method 
    callSeftIntroduce = () => {
        return this.#seftIntroduce();
    }
}
let LVKQuoc = new Student("Luong Vo Khoi Quoc","N22DCPT077","Multimedia Application Development","15/05/2004");
console.log(LVKQuoc.callSeftIntroduce()); //Hello, my fullname is Luong Vo Khoi Quoc, I'm PTIT student
console.log(LVKQuoc.seftIntroduce) // error
console.log(LVKQuoc.university) //undefined

console.log(LVKQuoc.name); // Luong Vo Khoi Quoc
console.log(LVKQuoc.mssv); // N22DCPT077
console.log(LVKQuoc.major); //Multimedia Application Development
console.log(LVKQuoc.birthday); //15/05/2004


//static method
class MathUtils {
    static add(a, b) {
      return a + b;
    }
}

console.log(MathUtils.add(3, 5)); // Output: 8


