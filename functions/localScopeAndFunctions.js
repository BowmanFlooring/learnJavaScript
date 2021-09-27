//--------//--------//--------//--------//--------//--------//--------//--------
// Local Scope And Functions

// Variables defined in a LOCAL scope will only be available, or accessible,
// within that function.

// Example

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope(); // RESULT: 5 <-- It's logging a locally scoped variable!

console.log(myVar); // This will throw an error! It's outside the local scope!
