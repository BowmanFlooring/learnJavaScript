//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Strict Equality Operator

// We now know that the equality operator is the double equal sign
// In JS, we also have the strict equality operator, the triple equal sign

// With the double equal sign, JS attempts to convert both values to a
// common type.

3 == 3; // True
3 == '3'; // True

// The strict equality (triple equal sign) operator does NOT attempt
// to do the type conversion

3 === 3; // True
3 === '3'; // False

// Setup

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict("7")); // RSLT: Not Equal