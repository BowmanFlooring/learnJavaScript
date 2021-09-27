//--------//--------//--------//--------//--------//--------//--------//--------
// Replacing If Else Chains With Switch

// Sometimes a switch statement is easier to write/understand that 'if-else'

// Example - chain of 'if-else' statements

function ifElse(val) {
    var answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "Jackie";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "A.D.";
    } else if (val === 7) {
        answer = "Ate Nine";
    }
    return answer;
}

// Example - replace 'if-else' with 'switch'

function chainToSwitch(val) {
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "Jackie";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "A.D.";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}

console.log(chainToSwitch(1)); // RSLT: There is no #1