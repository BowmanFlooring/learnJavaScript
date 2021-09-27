//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Equality Operator

// There are many comparison operators in JS that will return a true/false

// Setup

function testEqual(val) {
    // the 'double equal sign' is the 'equality' operator
    // a single equal sign can't be used because that is the
    // assignment operator! (assigning value to variables, etc.)
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
};

console.log(testEqual(22)); // RSLT: Not Equal
console.log(testEqual(12)); // RSLT: Equal


// Change this value to test
testEqual(10);