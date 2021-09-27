//--------//--------//--------//--------//--------//--------//--------//--------
// Understanding Undefined Value Returned From A Function

// Functions CAN have return statements, but they DO NOT have to!

// Example

var sum = 0;
function addThree() {
    sum = sum + 3;
    // If a return value isn't specified, then it's just 'undefined'
}

function addFive() {
    sum += 5;
}

console.log(addFive()); // RESULT: undefined