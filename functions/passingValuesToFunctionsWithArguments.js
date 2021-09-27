//--------//--------//--------//--------//--------//--------//--------//--------
// Passing Values To Functions With Arguments

// Parameters are variables that act as placeholders for the values
// that are to be input to a function when it is called

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

// Inside our function, we have defined two parameters.
// On the console, we want to log the difference of the two
// arguments passed into the function. These can be ANY name. We
// don't have to call them 'a' and 'b'.

ourFunctionWithArgs(10, 5); // RESULT: 5

// When we call our function, we are passing the values '10' and '5',
// as requested by the two parameters of our function. So, when the
// function runs, it can use the information that passed into it.

// Summary - with new custom function

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(32834, 822); // RESULT: 33656
