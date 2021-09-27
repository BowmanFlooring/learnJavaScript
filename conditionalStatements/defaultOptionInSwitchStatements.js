//--------//--------//--------//--------//--------//--------//--------//--------
// Default Option In Switch Statements

// The default option is kind of like 'else' in an 'if-else' statement

// Example

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

// The default statement allows us to return a default value if one of
// our cases is NOT met. 