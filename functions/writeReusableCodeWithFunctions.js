//--------//--------//--------//--------//--------//--------//--------//--------
// Write Reusable Code With Functions

// Example

function ourReusableFunction() {
    console.log("Heyya, World!");
}

// This is how a basic function is set up. We have:
// 1. The word 'function'
// 2. Our function's name
//   2a. if the name is multiple words, always use camelCase!
// 3. A set of parentheses
//   3a. information can be passed to the function here
//     3aa. more info on this later!
// 4. Curly Braces!
//   4a. opening bracket on same line
//   4b. closing bracket on new line
//   4c. everything within the curly's will be run when the function is called
//     4ca. another word for a function being called is 'invoked'

// To call our function, write it like this:
ourReusableFunction();

// When this function is invoked, the console is going to log "Heyya, World!"

function reusableFunction() {
    console.log("Hi World");
};

reusableFunction(); // console will log "Hi World"