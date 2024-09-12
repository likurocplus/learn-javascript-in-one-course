

// match method
let str = "JavaScript is awesome, JavaScript is fun!";
let regex = /JavaScript/g;
let result = str.match(regex);
console.log(result); // ["JavaScript", "JavaScript"]

// matchAll method
let str1 = "JavaScript is awesome, JavaScript is fun!";
let regex1 = /JavaScript/g;
let result1 = str1.matchAll(regex1);
for (const element of result1) {
    console.log(element); //iterator
}

//replace method
let str2 = "I love JavaScript! I like JavaScript";
let regex2 = /JavaScript/g;
let newStr = str2.replace(regex2, "Java");
console.log(newStr); // "I love Java! I like Java"

//replace method
let str3 = "I love JavaScript! I like JavaScript";
let regex3 = /JavaScript/;
console.log(str3.search(regex)); //output: 7


//exec method
let strr = "The number is 12345.";
let regexx = /\d+/;
let resultt = regexx.exec(strr);
console.log(resultt); // ["12345", index: 13, input: "The number is 12345.", groups: undefined]

//test method
let regex4 = /JavaScript/;
let str4 = "I love JavaScript!";
let str5 = "I love Python!";

console.log(regex.test(str4)); // true
console.log(regex.test(str5)); // false