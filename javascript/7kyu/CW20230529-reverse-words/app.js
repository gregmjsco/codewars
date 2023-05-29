//Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.


function reverseWords(str) {
    // Go for it
    let myArray = str.split(' ');
    let wordsReversedArray = myArray.map(word => word.split('').reverse().join(''));
    let wordsReversedString = wordsReversedArray.join(' ');
    return wordsReversedString;
  }