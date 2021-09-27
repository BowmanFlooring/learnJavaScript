//// Iterate With Do While Loops

// Setup
var myArray = [];
var myArray2 = [];
var i = 10;
var j = 10;

// Only change code below this line

// A 'while' loop first checks the condition before running the code
while (i < 5) {
    myArray.push(i);
};

console.log(i, myArray); // RSLT: 10 []

// a 'do-while' loop always runs it at least once, then check the condition
do {
    myArray2.push(j);
    j++;
} while (j < 5);

console.log(j, myArray2); // RSLT: 11 [ 10 ]