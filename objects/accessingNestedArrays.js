//// Accessing Nested Arrays

// Here's a variable defined as an array with two elements
// Both elements of the array are objects

// Inside both objects, we have a key-value pair
// The key is 'list', and the value is another array

// Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        // To access 'trees', we combine dot and bracket notation
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
/**
 * Explaination of how the 'secondTree' variable was built:

 * 1. 'myPlants' is an array, so we access elements with []

 * 2. Then use dot notation to get to the 'list' element
    - dot notation because this element is in an object!
 
 * 3. To access items in the 'list' element (another array),
    we use bracket notation
 */

console.log(secondTree); // RSLT: pine