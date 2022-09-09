// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal,
// $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines
// which of the two strings has more characters. Use the two sets of
// test variables provided.

// Describe your process:

// Determine how long each string is by using .length() function

// Set one:
const fruit1 = "apple";
const fruit2 = "banana";
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

//==============================================================================
// --------------------1) Create the code that determines if a given number is
// below boiling point, at boiling point, or above boiling point. Boiling point
// is 212 degrees Fahrenheit. Use the test variables provided below.
//==============================================================================
// Describe your process:
//==============================================================================

// created a function that determines boiling point
// I did it this way to make it easier to test all the variables provided
const determineBoilingPoint = (temp) => {
  // if temp is less than boiling point..
  if (temp < 212) {
    // return "temp is below boiling point"
    return console.log(`${temp} is below boiling point`);
    // else if temp is exactly the boiling point..
  } else if (temp === 212) {
    // return "temp is the boiling point"
    return console.log(`${temp} is at boiling point`);
    // else if temp is exactly the boiling point..
  } else if (temp > 212) {
    // return "temp is above boiling point"
    return console.log(`${temp} is above boiling point`);
    // else if input is something that does not meet above conditions...
  } else {
    // return "error message"
    return console.log("Error! Something was incorrectly entered.");
  }
};

const temp1 = 42;
// function call
determineBoilingPoint(temp1); // Expected output: "42 is below boiling point"

// function call
const temp2 = 350;
determineBoilingPoint(temp2); // Expected output: "350 is above boiling point"

// function call
const temp3 = 212;
determineBoilingPoint(temp3); // Expected output: "212 is at boiling point"

//==============================================================================
// --------------------2) Create the code that will combine the two arrays and
// return the length using the test variables provided below.
//==============================================================================
// Describe your process:
//==============================================================================
// declare the variable I will use to show array length
let padresCombinedArrayLength;
// the two arrays i will combine
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];

// combine the two arrays and then get the length of combined array output
// store value of array length in padresCombinedArrayLength variable
padresCombinedArrayLength = padres1998WorldSeriesRuns.concat(
  padres1984WorldSeriesRuns
).length;

console.log(padresCombinedArrayLength); // Expected output: 9

//==============================================================================
// --------------------3) Create the code that will reverse the letters of a
// string using the test variable provided below.
//==============================================================================
// Describe your process:
//==============================================================================

const currentCohort = "Foxtrot 2022";
// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of
// the given value from the array using the test variables provided below.

// Describe your process:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];
const givenValue1 = 42;
// Expected output: 7

const givenValue2 = 10;
// Expected output: 8

//==============================================================================
// --------------------5) Create the code that will sort all the numbers in
// an array from largest to smallest. Use the test variables provided below.
//==============================================================================
// Describe your process:
//==============================================================================

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
// Expected output: [68, 67, 66, 66, 62, 59, 59]
