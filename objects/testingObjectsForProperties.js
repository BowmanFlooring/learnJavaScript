//--------//--------//--------//--------//--------//--------//--------//--------
// Testing Objects For Properties

// You can check if an obect has a given property with the 'has-own' method

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        // This is going to come back as either true or false based on
        // whether or not the object has that property
        return myObj[checkProp];
        // Return the value of that property, if it exists
    } else {
        return "Not Found";
        // If property doesn't exist, return 'Not Found'
    }
}

// Test
console.log(checkObj("gift")); // RSLT: pony
// We know this property exists

// Test 2
console.log(checkObj("name")); // RSLT: Not Found