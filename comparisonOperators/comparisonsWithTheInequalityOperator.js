//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Inequality Operator

// The inequality operator is basically the opposite of the equality operator
// It's represented like so: != (exclamation mark, equal sign)

// Setup

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
};

console.log(testNotEqual(10)); // RSLT: Not Equal