//--------//--------//--------//--------//--------//--------//--------//--------
// Manipulate Arrays With Push, Pop, Shift

// PUSH
// The 'push' function pushes data into an existing array!

// Example

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// POP
// The 'pop' function removes the last element from an existing array!

// Example

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray noew equals 3, and ourArray now equals [1,2]

// Setup

var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray); // RESULT: [ 'cat', 2 ] - Nice Job!

// SHIFT
// The 'shift' function removes the first element from the array!

// Example

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray equals ["J", ["cat"]]

// Setup

var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

var removedFromMyArray = myArray.shift();
console.log(myArray); // RESULT: [ [ 'dog', 3 ] ]
console.log(removedFromMyArray); // RESULT: [ [ 'John', 23 ] ]

//////// There are MANY MANY MANY more methods that can be performed on 
/////////// strings! Just use the '.' operator and let autocomplete fill
/////////// in the blanks! It comes with full descriptions as well!