//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Strict Inequality Operator

// The strict inequality operator is the opposite of the strict equality
// operator; and it's represented like so: !== (exclamation mark, 2 equal signs)

// Again, strict comparisons DO NOT perform type conversion prior
// to actually comparing the two values

// Setup

function testNotEqual(val) {
    if (val !== "20") {
        return "Not Equal";
    }
    return "Equal";
};

console.log(testNotEqual(20)); // RSLT: Not Equal