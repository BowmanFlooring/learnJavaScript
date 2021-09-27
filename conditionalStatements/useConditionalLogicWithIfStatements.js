//--------//--------//--------//--------//--------//--------//--------//--------
// Use Conditional Logic With If Statements

// An 'if' statement is used to make decisions in code
// The keyword 'if' tells JS to execute the code in the curly braces
// under certain conditions defined within the parentheses

// Example

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { // There is ALWAYS parentheses after the keyword 'if'
        // If the expression inside the parentheses evaluates to true,
        // then the code here (inside curly braces) will be run
        return "Yes, it's true";
    }
    // If the expression above DOES NOT evaluate to true,
    // then this second return statement get executed
    return "No, it's false";
}

// Here's another example

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true)); // RSLT: Yes, that was true