//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Greater Than Operator

// JS also utilizes greater-than/less-than operators for comparison expressions

function testGreaterThan(val) {
    if (val > 100) {
        return "Value is over 100";
    }

    if (val > 10) {
        return "Value is over 10";
    }

    return "Value is 10 or under";
}

console.log(testGreaterThan(3)); // RSLT: Value is 10 or under
console.log(testGreaterThan(40)); // RSLT: Value is over 10
console.log(testGreaterThan(120)); // RSLT: Value is over 100