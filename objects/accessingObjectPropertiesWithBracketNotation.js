//--------//--------//--------//--------//--------//--------//--------//--------
// Accessing Object Properties With Bracket Notation

// The other way to access object properties is 'bracket notation'

// Bracket notation can be used any time, but it is REQUIRED if the
// name of the property has a space in it!

// Setup

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log("entree = " + entreeValue + "\n" + "drink = " + drinkValue);