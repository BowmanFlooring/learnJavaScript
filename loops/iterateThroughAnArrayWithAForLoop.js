//// Iterate Through An Array WIth A For Loop

// It's common in JS to iterate through the contents of an array

// Up to now, we were always adding items to the array
// This time, the array already exists

// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    // instead of going to a specific number of iterations, we're
    // iterating as many times as there are elements in the array
    ourTotal += ourArr[i];
    // for each iteration, add the element in the ourArr variable
    // to the ourTotal variable; repeat for each array element
};

console.log(ourTotal); // RSLT: 42