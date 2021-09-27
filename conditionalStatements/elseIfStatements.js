//--------//--------//--------//--------//--------//--------//--------//--------
// Else If Statements

// If you have multiple conditions that need addressed, 
// you can use 'else-if' statements

// It's a way of chaining 'if' statements together!

// In the example below, we have three conditions
// It's a perfect use-case for an 'else-if' statement

// Example with 'if' statement

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    if (val < 5) {
        return "Smaller than 5";
    }

    return "Between 5 and 10";
}

// Example with 'else-if' statement

function testElseIfStatement(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}