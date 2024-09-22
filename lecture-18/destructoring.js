// Destructuring assignment syntax to unpack values into distinct variables

// unpack and assign from array
const arr = ['Luong','Vo','Khoi','Quoc']
const [,val1,, val3] = arr // destructuring
console.log(val1) // Vo
console.log(val3) // Quoc

// in this function, the argument passed in is an object, we then:
// 1. destructure it
// 1. give destructured input default values
function print({ a: val1 = 1, b: val2 = {}, c: val3 = false }) {
    console.log(val1)
    console.log(val2)
    console.log(val3)
  }