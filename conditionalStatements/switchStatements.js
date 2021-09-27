//--------//--------//--------//--------//--------//--------//--------//--------
// Switch Statements

// Instead of using chained 'if-else' statements, you can use a swtich statement

// A switch statement tests a value and can have many case statements which
// define various possible values

/**
 * Write a switch statement which tests 'val' and sets answer for the
 * following conditions:
 * 1 - "alpha"
 * 2 - "beta"
 * 3 - "gamma"
 * 4 - "delta"
 */

// If we pass '1', the answer should be "alpha", and so on...

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1)); // RSLT: alpha