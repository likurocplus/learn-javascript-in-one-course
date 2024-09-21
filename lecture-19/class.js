// Classes in Javascript
class Student {
  //contructor
  constructor(_name, _mssv, _major, _birthday) {
    this.name = _name; //defined class public properties
    this.mssv = _mssv; // be able to access
    this.major = _major;
    this.birthday = _birthday;
  }
  //private property
  university = "PTIT"; // defined private property start with a #
  //method
  //private method
  #seftIntroduce = () => {
    return `Hello, my fullname is ${this.name}, I'm ${this.university} student`;
  };
  //func call above private method
  callSeftIntroduce = () => {
    return this.#seftIntroduce();
  };
}
let LVKQuoc = new Student(
  "Luong Vo Khoi Quoc",
  "N22DCPT077",
  "Multimedia Application Development",
  "15/05/2004"
);
console.log(LVKQuoc.callSeftIntroduce()); //Hello, my fullname is Luong Vo Khoi Quoc, I'm PTIT student
console.log(LVKQuoc.seftIntroduce); // error
console.log(LVKQuoc.university); //undefined

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

//inheritance
class hustStudent extends Student {
  //@Override
  university = "HUST";
}
let NQLinh = new hustStudent(
  "Nguyen Phuong Linh",
  "N22DCPT048",
  "Multimedia Design",
  "14/12/2004"
);
console.log(NQLinh.callSeftIntroduce()); //Hello, my fullname is Nguyen Phuong Linh, I'm HUST student

//EXAMPLE 2
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speaks`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Gọi constructor của lớp cha (Animal)
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. Breed: ${this.breed}`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Output: Buddy barks. Breed: Golden Retriever




//prototype
function Blockchain(name,symbol) {
    //property
    this.name = name;
    this.symbol = symbol;
    //method
    this.send = () => {
        console.log("successful!!!");
    }
}

let SolanaChain = new Blockchain("Solana","SOL");
Blockchain.prototype.gas = 0.0001;
console.log(`${SolanaChain.gas} SOL`); //0.0001 SOL