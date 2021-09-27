//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Logical And Operator

// Sometimes you want to check if two things are true simultaneously

function testLogicalAnd(val) {
    if (val <= 50) {
        // This is a nested 'if' statement
        if (val >= 25) {
            return "Yes";
        }
    }
    return "No";
}

// The two separate 'if' statements can be avoided by using the "&&" operator

function testLogicalAndOperator(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

// NOTE: Use the '&&' operator when you need BOTH expressions to be true!

console.log(testLogicalAndOperator(30)); // RSLT: Yes
console.log(testLogicalAndOperator(20)); // RSLT: No