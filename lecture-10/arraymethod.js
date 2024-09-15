// 1. filter()
// Filters out elements that satisfy the given condition
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 2. includes()
// Checks if the array contains a specific value
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape'));  // Output: false

// 3. indexOf()
// Finds the first occurrence of a value
console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('grape'));  // Output: -1

// 4. lastIndexOf()
// Search the last index of a value in an array, method lastIndexOf
const arr21 = [1,2,3, 'a', 'b', 1, 'b']
console.log(arr21.lastIndexOf(1)) // 5
console.log(arr21.lastIndexOf('b')) // 6
console.log(arr21.lastIndexOf('b', 5)) // 4, start search from index 5
console.log(arr21.lastIndexOf('d')) // -1
console.log(arr21) // [ 1, 2, 3, 'a', 'b', 1, 'b' ], original array NOT modified

// 5. join()
// Joins all elements into a string, separated by a given separator
console.log(fruits.join(', ')); // Output: "apple, banana, orange"

// 6. slice()
// Extracts a portion of the array
let numbers1 = [1, 2, 3, 4, 5];
let slicedNumbers = numbers1.slice(1, 3);
console.log(slicedNumbers); // Output: [2, 3]

// 7. forEach()
// Executes a function for each element in the array
let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10

// 8. map()
// Maps the array to a new array by applying a function to each element
let squaredNumbers = numbers2.map(num => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 9. reduce()
// Reduces the array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// 10. some()
// Checks if at least one element satisfies the condition
console.log(numbers.some(num => num > 3)); // Output: true
