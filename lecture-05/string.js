
// 3 ways to declare string variables in Javascript
let str1 = 'luong vo khoi quoc' // put text between single quote
let str2 = "luong vo khoi quoc" // double quotes ok
let str3 = `luong vo khoi quoc` // backticks ok

//backtick
let name = 'Quoc';
console.log(`Hello, my name is ${name}`)


//get index
let name1 = "Luong Vo Khoi Quoc"
console.log(name1[1]); //output: u
console.log(name1.charCodeAt(1)) //output: 117 <=> u in UTF-16

//split String
let name2 = "Luong Vo Khoi Quoc"
console.log(name2.split(' '));  

//substring
let name3 = "Luong Vo Khoi Quoc";
console.log(name3.substring(0, 5)) //output: Luong
console.log(name3.substr(0,5)) //output: Luong
console.log(name3.slice(0,5)) //output: Luong


//lower and upper case
let name4 = "Luong Vo Khoi Quoc";
console.log(name3.toLowerCase()) //output: luong vo khoi quoc
console.log(name3.toUpperCase()) //output: LUONG VO KHOI QUOC



