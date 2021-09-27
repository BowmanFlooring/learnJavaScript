//--------//--------//--------//--------//--------//--------//--------//--------
// Access Multi-Dimentional Arrays With Indexes

// Example

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// Only change code below this line

var myData = myArray[0][0]; // RESULT: 1
// The first bracket is going to be the first element in the array. This is
// simply because we chose [0] as the index, so that's the first element.
// The second bracket is going to be the first element (number) within that
// first element (array).
// Think of it almost like index nesting!

// So, as an example, how would we get the number 8?

var myData = myArray[2][1]; // RESULT: 8 - nice job!