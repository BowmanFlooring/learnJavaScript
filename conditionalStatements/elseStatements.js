//--------//--------//--------//--------//--------//--------//--------//--------
// Else Statements

// When an 'if' statement is true, normally the block of code right after
// the 'if' statement will be evaluated
// If it's NOT true, nothing happens

// With an 'else' statement, an alternative block of code can be executed
// given the 'if' statement is NOT true

// Example with 'if'

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }

    if (val <= 5) {
        result = "5 or Smaller";
    }

    return result;
}

// Example with 'if' and 'else'

function testElseStatement(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}

// As you can see, the code is much cleaner and simpler