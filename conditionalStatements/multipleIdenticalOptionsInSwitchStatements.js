//--------//--------//--------//--------//--------//--------//--------//--------
// Multiple Identical Options In Switch Statements

// Sometimes you want a switch statement where  multiple inputs = 1 output
// Well, that's easy enough - we just ommit the 'break' statement

// Example

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            // Since there's no break statement between each case,
            // it will just keep going on to the next one automatically
            answer = "Low";
            // Now we can put the break statement here
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

// Change this value to test
console.log(sequentialSizes(7));