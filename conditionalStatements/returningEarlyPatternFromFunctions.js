//--------//--------//--------//--------//--------//--------//--------//--------
// Returning Early Pattern From Functions

// Setup

function abTest(a, b) {
    // This 'if' statement, with a return of 'undefined', will allow itself
    // to jump out of the function early if either 'a' or 'b' are less than 0
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(33, 93));