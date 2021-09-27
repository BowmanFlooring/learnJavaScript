//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Greater Than Or Equal To  Operator

function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "Value is over 20";
    }

    if (val >= 10) {
        return "Value is over 10";
    }

    return "Value is less than 10";
}

console.log(testGreaterThanOrEqual(5)); // RSLT: Value is less than 10
console.log(testGreaterThanOrEqual(15)); // RSLT: Value is over 10
console.log(testGreaterThanOrEqual(25)); // RSLT: Value is over 20