//--------//--------//--------//--------//--------//--------//--------//--------
// Practice Comparing Different Values

// Setup

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(12, "12")); // Equal
console.log(compareEquality(32, 11)); // Not Equal