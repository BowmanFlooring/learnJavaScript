//--------//--------//--------//--------//--------//--------//--------//--------
// Comparisons With The Less Than Or Equal To Operator

function testLessThanOrEqual(val) {
    if (val <= 12) {
        return "Less than or equal to 12";
    }

    if (val <= 24) {
        return "Less than or equal to 24";
    }

    return "Over 24";
}

console.log(testLessThanOrEqual(20)); // RSLT: Less than or equal to 24