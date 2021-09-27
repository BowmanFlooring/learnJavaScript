//// Record Collection

/**
 * CODING CHALLENGE:

 * The following object is a record collection. 
 
 * Each record has an ID, and also other info about the record.

 * The records don't all have the same information.

 * Create a function that takes the ID, property, and value as params.
    1. The ID passed in will be that of an existing record.
    2. The record with the corresponding ID will be updated with
       the info passed to the property and value params.

 * At the end, return the full collection to confirm that the
    changes have taken effect.
 */

// The Record Collection
var collection = {
    "0001": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "0002": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "0003": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "0004": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the original collection for testing and comparison
var originalCollection = JSON.parse(JSON.stringify(collection));

// Only change code below this line

// Update the collection

/**
 * NOTE:
    
 * If we have an empty string for the value, 
   it should just completely delete that property

 * If we choose a property argument of "tracks", it will simply
   add the track to the end of the "tracks" array.
*/

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
        // deletes property value if value is an empty string
    } else if (prop === "tracks") {
        // Here's how you create a property if it doesn't exist:
        collection[id][prop] = collection[id][prop] || [];
        // If it already exists, set it to equal itself
        // If it doesn't exist, set it to equal an empty array
        collection[id][prop].push(value);
        // Now that it exists, push the value to the end of the array
    } else {
        // If value isn't blank, and the property isn't tracks,
        // then we just push the value onto the property
        collection[id][prop] = value;
    }

    return collection;
};

// Alter values below to test out the code
console.log(updateRecords("0004", "artist", "ABBA"));