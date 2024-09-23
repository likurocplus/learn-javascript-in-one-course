// //typeof
// const myFunc = () => {}
// console.log(typeof 123) // number
// console.log(typeof 'abc') // string
// console.log(typeof true) // boolean
// console.log(typeof undefined) // undefined
// console.log(typeof myFunc) // function
// console.log(typeof {}) // object
// //typeof for Array 
// console.log(typeof []) // object, wrong, DO NOT use
// console.log(Array.isArray([])) // true, correct
// console.log(typeof null) // object, wrong DO NOT use


// Delete an object property: operator delete

const obj = {
    a: 'b',
    c: 1
  }
  console.log(delete obj.a) // true
  console.log(obj) // { c: 1 }


// Check if a property exists in an object: operator "in"

const obj1 = {
    a: 'b',
    c: 1
  }
  console.log('a' in obj1) // true
  console.log('d' in obj1) // false


const developer = {
  name: "Luong Vo Khoi Quoc",
  role: "Intern"
}
console.log(developer.hasOwnProperty("name")) //true