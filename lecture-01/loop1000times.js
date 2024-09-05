// Function definition: loop1000times
// Input: A string 'str' to be printed 1000 times
function loop1000times(str) {
    // Process: Iterate from 0 to 999 (total 1000 iterations)
    for (let index = 0; index < 1000; index++) {
        // Output: Print the string in each iteration
        console.log(str);
    }
}

// Call the function with the string "I love you"
loop1000times("I love you"); //Output: "I love you" 1000 times

// ----- example of chaos programming with no language or standard

// coder1
// function loop 1000 times (str) {
//     loops (1000) {
//         write(str);
//     }
// }
// // coder2
// function square {str} {
//     for (let index = 0; index < 1000; index++) {
//         console.log(str);
//     }
// }

// no computer nor human can understand either coder1 or coder2 way

// ----- Javascript (standard) way to define a function

function loop1000times(str) {
    for (let index = 0; index < 1000; index++) {
        console.log(str);
    }
}
// now computer and everyone can understand

// my thought: I want to print any string 1000 times
// express my thought in Javascript language
function loop1000times(str) {
    for (let index = 0; index < 1000; index++) {
      console.log(str);
    }
  }
  
  // now the computer can print the string for me whenever I tell it to
  loop1000times("I love you");
  