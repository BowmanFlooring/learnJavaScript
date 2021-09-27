//// Iterate With For Loops

// A 'for' loop is the most common type of loop in JavaScript

// Example
var ourArray = [];

// Fill our array with the numbers 0 through 4
for (var i = 0; i < 5; i++) {
    // 3 things within the parentheses of a 'for' loop:
    // the initialization, the condition, the expression
    ourArray.push(i);
};

// Initialization: happens before any code actually runs
// Condition: once evaluated to 'false', break out of 'for' loop
// Expression: what we do at the end of each iteration

// Example 2
var myArray = [];

// Fill my array with the numbers 1 through 6
for (var i = 1; i < 6; i++) {
    myArray.push(i);
};

console.log((ourArray), (myArray));
// RSLT: [ 0, 1, 2, 3, 4 ] [ 1, 2, 3, 4, 5 ]