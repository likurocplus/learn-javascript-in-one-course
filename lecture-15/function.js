//function is a variable
const myFunction = () => {
    console.log("function is a variable");
}
myFunction();
//function us a argument
const function1 = () => "function is a argument"
const function2 = (function1) => {
    console.log(function1()); //call function1
}
console.log(function1());
function2(function1);

//function is a value return
//way 1 
const func1 = () => () => "function is a return value"
console.log(func1()());
//way2
const func2 = () => {
    return () => {
      return "function is a return value";
    };
};
console.log(func2()());



//function able to blueprint (class) have property and method
function myInfo() {
    //property
    this.name = "Luong Vo Khoi Quoc"
    this.id= "N22DCPT077"
    this.class = "D22CQPTUD01-N"
    //method
    this.seftIntroduce = function() {
        return `My fullname is ${this.name}`;
    }
}

let info = new myInfo();
console.log(info.name); //Luong Vo Khoi Quoc
console.log(info.seftIntroduce()) // My fullname is Luong Vo Khoi Quoc


//auto called, run,...
;(function funC(){ console.log("My name is Quoc")})();
;(()=>{console.log("I'm PTIT student")})();


//varible scope
let a = 2; //global scope
console.log(a); //output: 2
// console.log(b); //error
//function scope
;(() => {
    let b = 3;
    console.log(a*b); //output: 6
    // console.log(c); //error
    ;(() => {
        let c = 4;
        console.log(a*b*c); //output: 24
    })()
})()



function myInfo1() {
    return `My fullname is ${this.name}`;
}
console.log(myInfo1()); //My fullname is undefined
let myInfo2 = {
    name: "Nguyen Phuong Linh",
    seftIntroduce: function() {
        return `My fullname is ${this.name}`;
    }
}
console.log(myInfo1.bind(myInfo2)); //My fullname is Nguyen Phuong Linh

