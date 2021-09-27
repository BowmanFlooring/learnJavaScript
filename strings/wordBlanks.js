//--------//--------//--------//--------//--------//--------//--------//--------
// Word Blanks

// Using our knowledge of strings, we can build a simple 'Mad Libs' style game!

// In Mad Libs, you're provided sentences (usually a short little story), and
// you're supposed to pick words that fit the word type written in the blanks.
// In the end, you're left with a funny story that, grammatically, makes sense.
// But in reality, the actual story ends up being comedy. 

// Now, this example uses a function. We haven't gone over functions yet, but
// for the sake of the example, just roll with it! We will see functions more
// in-depth a bit later.

// Example
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The "
        + myAdjective
        + " "
        + myNoun
        + " "
        + myVerb
        + " to the store "
        + myAdverb
        + "."
    // Your code below this line
    return result;
}

// Change the words here to test your function

// This is where we actually call our function. The parameters of our function
// MUST BE FILLED IN, or the function will throw an error!!
console.log(wordBlanks("dog", "big", "ran", "quickly"));

/**
 * RESULT:
 * The big dog ran to the store quickly.
 */