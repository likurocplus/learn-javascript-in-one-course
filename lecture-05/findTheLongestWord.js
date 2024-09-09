// input: paragraph
// output: the longest words
// process: sum function add up base and adjustment to return realtime
//          stock trading rate
// this function's feature is: find the longest word on paragraph
const findTheLongestWord = (paragraph) => {
    // step 1: split the paragraph into an array of words
    let wordArray = paragraph.split(' ');

    // step 2: declare a variable to save the longest word (set to the first word in the array)
    let longestWord = wordArray[0];

    // step 3: loop each word in the array
    for (const word of wordArray) {
        // step 4: check if the length of the current word is greater than or equal to the longest word
        if (word.length >= longestWord.length) {
            // step 5: if the current word is longer, set it as the new longest word
            longestWord = word;
        }
    }

    // step 6: return the longest word found
    return longestWord;
};


// Test Function

let paragraph
