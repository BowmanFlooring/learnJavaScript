//--------//--------//--------//--------//--------//--------//--------//--------
// Using Objects For Lookups

// Objects can be thought of as storage of key-values
// Like a dictionary!

// You can use an object to look up those values

// Example with switch statement
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
        case "charlie":
            result = "Chicago";
        case "delta":
            result = "Denver";
        case "echo":
            result = "Easy";
        case "foxtrot":
            result = "Frank";
    }
}

// The switch statement in the fuction above can be replaced
// with an object
// We can then use that object for lookups instead of the switch statement

// Example with object
function phoneticLookup2(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    // Using bracket notation here
    return result;
}

console.log(phoneticLookup2("charlie")); // RSLT: Chicago