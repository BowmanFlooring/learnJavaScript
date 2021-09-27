//// Iterate Odd Numbers With A For Loop

// Loops can increment in more ways than just one at a time

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
};

console.log(ourArray); // RSLT: [ 0, 2, 4, 6, 8 ]

// Example 2
var ourArray2 = [];

for (var i = 1; i < 10; i += 2) {
    ourArray2.push(i);
};

console.log(ourArray2); // RSLT: [ 1, 3, 5, 7, 9 ]