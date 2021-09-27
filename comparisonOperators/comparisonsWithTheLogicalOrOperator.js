//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Logical Or Operator

// Example

function testLogicalOr(val) {
    if (val < 10) {
        return "Outside";
    }

    if (val > 20) {
        return "Outside";
    }

    return "Inside";
}

// In the code above, we're checking that the value IS NOT between 10 and 20
// If the value is less than 10, return "Outside"
// If the value is more than 20, return "Outside"

// The easier way to do this is with the logical or operator
// The 'or' operator is just two pipes - ||

function testLogicalOrOperator(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOrOperator(15)); // RSLT: Inside
console.log(testLogicalOrOperator(30)); // RSLT: Outside