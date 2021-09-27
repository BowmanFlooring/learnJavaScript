//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Less Than Operator

function testLessThan(val) {
    if (val < 25) {
        return "Value is under 25";
    }

    if (val < 55) {
        return " Value is under 55";
    }

    return "Value is 55 or over";
}

console.log(testLessThan(20)); // RSLT: Value is under 25