// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why
// your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
//const colors = ["tangerine", "magenta", "lilac", "daffodil"];
// console.log(colors.push("indigo"))
// a) Your answer:
// b) Verify and explain:

//==============================================================================
// --------------------1) What will this log?
//==============================================================================

const cohort = "LEARN 2022";
// console.log(cohort.length)

// a) Your answer:
// Expected Output: 10
// Explanation: This should be 10 since the .length() method counts not just the
// characters, but the spaces inside a string too.

// b) Verify and explain:
// according to: https://www.w3schools.com/jsref/jsref_length_string.asp,
// the length() method returns the length of the string.
// according to: MDN Webdocs, length is also used to determine the length
// the elements of an array.
//-----------------------------
// example:
// const arr = [1, 2, 3, 4, 5]
// arr.length // returns 5, the number of elements in the array

//==============================================================================
// --------------------2) What will this log?
//==============================================================================

const greeting = "Hello World!";
// console.log(greeting[4])

// a) Your answer:
// Expected Output: "o"
// Explanation: This should be "o" since bracket notation is being used to call
// index 4 of the string, similar to how an array works.

// b) Verify and explain:
// according to:
// https://towardsdev.com/javascript-strings-bracket-notation-15efdbf8c354,
// bracket notation can be used to display a character in a string, but cannot
// be used to mutate individual characters in a string (unlike what you can do
// with an array).

//==============================================================================
// --------------------3) What will this log?
//==============================================================================

const languages = ["JavaScript", "Ruby", "Python", "C++"];
const index = 1;
// console.log(languages[index])

// a) Your answer:
// Expected Output: "Ruby"
// Explanation: this should be "Ruby" since the variable index, which has been
// assigned the value of 1 is being used with bracket notation on the
// languages array.

// b) Verify and explain:
// according to: https://www.dofactory.com/javascript/arrays
// bracket notation with variables normally i for index, can be usefull for
// iterating through an array when in a for-loop.

//==============================================================================
// --------------------4) What will this log?
//==============================================================================

const weekendDays = ["saturday", "sunday"];
//console.log(weekendDays.toUpperCase());

// a) Your answer:
// Expected Output: ERROR Message
// Explanation: this should return an error since the toUpperCase() works for
// strings, and not arrays. You would need to access the strings in the array
// individually and call the toUpperCase() method on each string to make them
// capitalized.
//-------------------------------
// Examples:
// console.log(weekendDays[0].toUpperCase()) //Expected Output: 'SATURDAY'
// console.log(weekendDays[1].toUpperCase()) //Expected Output: 'SUNDAY'
// console.log(weekendDays.toString().toUpperCase())
// Expected Output: 'SATURDAY,SUNDAY'

// b) Verify and explain:
// according to: MDN Web Docs, the toUpperCase() method is used to convert
// strings to uppercase.

//==============================================================================
// --------------------5) What will this log?
//==============================================================================

const dataTypes = ["number", "string", "Boolean"];
// console.log(typeof dataTypes.length)

// a) Your answer:
// b) Verify and explain:
