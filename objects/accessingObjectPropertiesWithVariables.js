//--------//--------//--------//--------//--------//--------//--------//--------
// Accessing Object Properties With Variables

// Bracket notation can be used to look up object properties using variables

// Setup

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

// We're going to set this variable to be one of the player's numbers
var playerNumber = 16;
// Inside this 'testObj', 16 is "Montana"
// We can look that up using the variable name instead of the number 
var player = testObj[playerNumber];
// Now, the varialble 'player' is set to the string "Montana"
console.log(player);
