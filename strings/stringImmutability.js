//--------//--------//--------//--------//--------//--------//--------//--------
// String Immutability

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix me!
console.log(myStr);

/**
 * RESULT:
 * Jello World
 */

// The string doesn't appear to be fixed! This is because the individual char-
// acters of a string literal cannot be chaned!

// If we actually want to change it, we do this:
myStr = "Hello World"