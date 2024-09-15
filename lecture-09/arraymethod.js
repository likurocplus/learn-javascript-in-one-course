// Get length of an array, property length
console.log([1,2,3, ["Quoc","Vy"]].length) // 4, length 4

// Empty array is different from sparse array
console.log([]) // [], empty array
console.log([].length) // 0, empty array length 0
console.log([,,,]) // [ <3 empty items> ], sparse array, empty element
console.log([,,,].length) // 3, sparse array length 3


// Removes the last element from an array, method pop
const arr8 = ['hung','khanh','quoc']
console.log(arr8.pop()) // quoc, popped element
console.log(arr8) // ['hung','khanh'], original array modified

// Removes the first element from an array, method shift
const arr9 = ['hung','khanh','quoc']
console.log(arr9.shift()) // hung, 'shifted' element
console.log(arr9) // [ 'khanh', 'quoc' ], original array modified

// Adds element(s) to the end of an array, method push
const arr10 = [1, 'b', 3]
console.log(arr10.push(4)) // 4, 'pushed' element
console.log(arr10) // [ 1, 'b', 3, 4 ], original array modified
console.log(arr10.push(5,6)) // 6, last 'pushed' element
console.log(arr10) // [ 1, 'b', 3, 4, 5, 6 ], original array modified

// Adds element(s) to the beginning of an array, method unshift
const arr101 = [1, 'b', 3]
console.log(arr101.unshift(4)) // 4, 'unshifted' element
console.log(arr101) // [ 4, 1, 'b', 3 ], original array modified
console.log(arr101.unshift(5,6)) // 6, last 'unshifted' element
console.log(arr101) // [ 5, 6, 4, 1, 'b', 3 ], original array modified

// Adds and/or removes elements from an array, method splice
const arr11 = [1,2,3,4,5]
console.log(arr11.splice(1)) // [ 2, 3, 4, 5 ], removed elements
console.log(arr11) // [ 1 ], modified original array

const arr12 = [1,2,3,4,5]
console.log(arr12.splice(1,2)) // [ 2, 3 ], removed elements
console.log(arr12) // [ 1, 4, 5 ], modified original array

const arr13 = [1,2,3,4,5]
console.log(arr13.splice(1,2, 'a', 'b', 'c')) // [ 2, 3 ], removed elements
console.log(arr13) // [ 1, 'a', 'b', 'c', 4, 5 ], modified original array

// Sorts the elements of an array, method sort
const arr14 = [4,3,9,7]
console.log(arr14.sort()) // [ 3, 4, 7, 9 ], sorted array
console.log(arr14) // [ 3, 4, 7, 9 ], original array modified

const arr15 = [['c', 5], ['b', 4], ['a', 7]]
console.log(arr15.sort((a,b) => a[1] - b[1]))
// sort by the number
// [ [ 'b', 4 ], [ 'c', 5 ], [ 'a', 7 ] ]

console.log(arr15.sort((a,b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)))
// sort by the character
// [ [ 'a', 7 ], [ 'b', 4 ], [ 'c', 5 ] ]

// Reverses the order of the elements of an array, method reverse
const arr16 = ['a', 'b', 'c']
console.log(arr16.reverse()) // [ 'c', 'b', 'a' ], reversed array
console.log(arr16) // [ 'c', 'b', 'a' ], original array modified


// Concatenate array with other array(s) and/or value(s), method concat
const arr17 = [1,2]
console.log(arr17.concat([4,5], [6], 7)) // [ 1, 2, 4, 5, 6, 7 ]
console.log(arr17.concat('a', 'b')) // [ 1, 2, 'a', 'b' ]
console.log(arr17.concat('c')) // [ 1, 2, 'c' ]
console.log(arr17) // [ 1, 2 ], original array NOT modified