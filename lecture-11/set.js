// Ways to create a set
const set1 = new Set() // wihout initial value
console.log(set1) // Set {}, empty set

const set2 = new Set([1,2,3, 'a', []]) // with some initial values
console.log(set2) // Set { 1, 2, 3, 'a', [] }

// Get the count of values in Set, property size
console.log(set1.size) // 0, set is empty
console.log(set2.size) // 5

// Add value to Set, method add
const set3 = new Set()
console.log(set3.add(1)) // Set { 1 }
console.log(set3.add(2)) // Set { 1, 2 }

// Check if a value in Set, method has
const set4 = new Set([1,2,'a','b',[], [4]])
console.log(set4.has(1)) // true
console.log(set4.has('b')) // true
console.log(set4.has([])) // false, set does not recognize array []
console.log(set4.has([4])) // false

// Delete a value in Set, method delete
const set5 = new Set([1,2,'a','b',[], [4]])
console.log(set5.delete(1)) // true
console.log(set5.delete(3)) // false
console.log(set5) // Set { 2, 'a', 'b', [], [ 4 ] }


// Remove all values in Set, method clear
const set6 = new Set([1,2,'a','b',[], [4]])
console.log(set6.clear()) // undefined
console.log(set6) // Set {}

// Loop through all values in Set, method forEach
const set8 = new Set([1,2,'a','b',[], [4]])
const additionalArg = 'hello' // an variable we want to include in loop logic
set8.forEach((value1, value2, originalSet) => {
  console.log(`value1: ${value1}, value2: ${value2}, additionalArg: ${additionalArg}`)
}, additionalArg)
console.log(set8) 