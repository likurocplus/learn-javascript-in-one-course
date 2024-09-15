// Ways to create an array
const arr0 = [] // literal, empty array
console.log(arr0) // []

const arr1 = ['a', 'b', 'c', 1 ,2 , 3] // literal, with values
console.log(arr1) // [ 'a', 'b', 'c', 1, 2, 3 ]

const arr2 = new Array(3) // with constructor, specify length 3
console.log(arr2) // [ <3 empty items> ]

const arr3 = new Array('a', 'b', 'c', 1 ,2 , 3) // with constructor and values
console.log(arr3) // [ 'a', 'b', 'c', 1, 2, 3 ]

const arr4 = new Array(4).fill(0) // length 4, pre-filled with 0
console.log(arr4) // [ 0, 0, 0, 0 ]

// Check if a variable is an array, method isArray
console.log(Array.isArray('quoc')) // false
console.log(Array.isArray([])) // true

// Fill array with given value, method fill
const arr5 = new Array(5)
console.log(arr5.fill(0)) // [ 0, 0, 0, 0, 0 ]
console.log(arr5.fill(1, 1)) // [ 0, 1, 1, 1, 1 ]
console.log(arr5.fill(2, 2, 5)) // [ 0, 1, 2, 2, 2 ]

// Get an element in array using index
const arr6 = [1,2, [3, 'a', ['b', 'c', 4]]] // mixed array
console.log(arr6[1]) // 2
console.log(arr6[2][1]) // a
// explanation: `arr6[2]` = [3, 'a', ['b', 'c', 4]]
//              `arr6[2][1]` = [3, 'a', ['b', 'c', 4]][1] = 'a'
console.log(arr6[2][2][2]) // 4
// explanation: `arr6[2]` = [3, 'a', ['b', 'c', 4]]
//              `arr6[2][2]` = ['b', 'c', 4]
//              `arr6[2][2][2]` = ['b', 'c', 4][2] = 4

// Modify an element in array
const arr7 = [1, 2, 'quoc', 'phu']
arr7[1] = arr7[1] + 1
console.log(arr7) // [ 1, 3, 'quoc', 'phu' ]
arr7[2] = arr7[2] + ' love vy'
console.log(arr7) // [ 1, 3, 'quoc love vy', 'phu' ]