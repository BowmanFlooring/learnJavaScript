//--------//--------//--------//--------//--------//--------//--------//--------
// Returning Boolean Values From Functions

// Here's a trick for when you want a function to return a boolean (true/false)

function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

console.log(isLess(12, 30)); // RSLT: true

// Since the expression in parentheses is evaluated as a boolean already,
// we can actually get rid of the entire if statement and make it simpler

function isLess2(a, b) {
    return a < b;
}

console.log(isLess2(12, 22)); // RSLT: true