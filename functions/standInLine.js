//--------//--------//--------//--------//--------//--------//--------//--------
// Stand In Line

// In computer science, a 'queue' is an abstract data structure where items are
// kept in order. New items can be added to the back of the queue, and old items
// are taken off from the front of the queue.

// Let's simulate the functionality of a queue by
// building a function called 'nextInLine'

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

// The purpose of this is to show that in this 'nextInLine' function,
// you can add an item to the array that's passed in. Then, it's going to
// return the first item on the list.

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)); // RSLT: [1, 2, 3, 4, 5]
console.log(nextInLine(testArr, 6)); // RSLT: 1
console.log("After: " + JSON.stringify(testArr)); // RSLT: [2, 3, 4, 5, 6]