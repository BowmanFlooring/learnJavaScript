//--------//--------//--------//--------//--------//--------//--------//--------
// Global Scope And Functions

// Scope refers to the visibility of variables.
// Variables which are defined outside of a function block have 'global' scope
// Global Scope means they can be seen everywhere in your JavaScript code.

// Declare your variable here
var myGlobal = 10;

// Now, since this is set outside of a function, we can see it
// anywhere in the whole code!

function fun1() {
    // Assign 5 to oopsGlobal here
    // NOTE: we CAN define/declare a variable here WITHOUT using
    // the 'var' keyword. If we do that, it WILL NOT be scoped
    // to the function, but rather have a GLOBAL SCOPE.
    var oopsGlobal = 5;
}

// Only change code below this line

// In the custom function below, we will use an 'if' statement to check
// if BOTH variables from above do NOT equal 'undefined'.

// Since we defined 'myGlobal' in the GLOBAL scope, it WILL BE DEFINED.
// Our code will recognize the value of that variable as '10'.

// Since we defined 'oopsGlobal' within the scope of the fuction above, our
// new function below WILL NOT recognize it, this equaling UNDEFINED.

// In short, the funtion below is a short excercise to test whether or not
// our variables have been defined GLOBALLY.

function fun2() {
    var output = "";
    // We will talk more about 'if' statements later!
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2(); 