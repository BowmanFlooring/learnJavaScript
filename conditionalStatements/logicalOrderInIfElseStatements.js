//--------//--------//--------//--------//--------//--------//--------//--------
// Logical Order In If Else Statements

// When using 'else-if' statements, order is very important

function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7)); // RSLT: Less than 10 

// So far, so good!
// However, if we put '3', it's still just going to say "Less than 10"

console.log(orderMyLogic(3)); // RSLT: Less than 10

// Really, we want this to say "Less than 5"
// This is because our code is in the wrong order!

function orderMyLogic2(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic2(7)); // RSLT: Less than 10
console.log(orderMyLogic2(3)); // RSLT: Less than 5