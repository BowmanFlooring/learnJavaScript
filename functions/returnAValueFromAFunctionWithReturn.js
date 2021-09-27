//--------//--------//--------//--------//--------//--------//--------//--------
// Return A Value From A Function With Return

// You can return a value from a function with the 'return' statement

// I'm calling the function 'minusSeven' because the function is going to
// subtract seven (7) from whatever number gets passed as an argument

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); // RESULT: 3

// Let's do the same thing, but with multiplication

function timesTen(num) {
    return num * 10;
}

console.log(timesTen(22)); // RESULT: 220 - Nice!

// Naming functions in this simple fashion actually helps to
// understand the code in a much more legible, almost English-like manner