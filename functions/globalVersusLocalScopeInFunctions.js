//--------//--------//--------//--------//--------//--------//--------//--------\
// Global Vs. Local Scope in Functions

// It is possible to have both global AND local variable with the same name!
// When you do this, the local var. takes precedence over the global var.

var outerWear = "T-Shirt"; // This is a GLOBAL variable

function myOutfit() {
    var outerWear = "Sweater";
    return outerWear; // This is a LOCAL variable
}

console.log(myOutfit); // RETURN: Sweater | The LOCAL var. took precedence!