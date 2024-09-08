let num1 = 1 // declare variable name `num1` and assign value 1 to it
let num2 = 2 // integer number
let pi = 3.14 // floating point number
let expNum1 = 5.6e+4 // exponential notation, equals 5.7e4 or 57000
let expNum2 = 5.6e-4 // exponential notation, equals 0.00056


let num3 = num1 + num2


// print them out in console
console.log('num1:', num1) // num1: 1
console.log('num2:', num2) // num2: 2
console.log('num2:', pi) // pi: 3.14
console.log('num3:', num3) // num3: 3
console.log('expNum1:', expNum1) // expNum1: 56000
console.log('expNum2:', expNum2) // expNum2: 0.00056


//Global Object
// `console` is a global object, we use it all the time without declaring
console.log('hello world')
//"Math" is global object we use it all the time without declaring
console.log(Math.PI)


// in this example
// Number -> objectName
// MAX_VALUE -> propertyName
console.log(Number.MIN_VALUE) 


// convert num1 to a string and assign that value to strNum1 variable
let strNum1 = num1.toString() 
let str = '3'
//convert str to a number
let numStr1 = parseInt(str) // convert `str` to number and assign it to num variable
let numStr2 = Number.parseInt(str) // convert `str` to number and assign it to num variable


// The smallest interval between two representable numbers.
console.log(Number.EPSILON) // 2.220446049250313e-16

// Integer bigger than this value will result inaccuracy in calculation.
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// Integer smaller than this value will result inaccuracy in calculation.
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Max number can be presented in Javascript
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

// Min number can be presented in Javascript (without actually being zero)
console.log(Number.MIN_VALUE) // 5e-324

// "Not a Number" value. You will see this a lot actually.
// This usually tells that calculation can't be done with given inputs
console.log(Number.NaN) // NaN
console.log( 0 / 0) // NaN
console.log( parseInt('abc')) // NaN

// "-Infinity" represent the negative infinity number
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(-1 / 0) // -Infinity, -1 divide by 0 result -Infinity

// "Infinity" represent the positive infinity number
console.log(Number.POSITIVE_INFINITY) // -Infinity
console.log(1 / 0) // Infinity, 1 divide by 0 result Infinity