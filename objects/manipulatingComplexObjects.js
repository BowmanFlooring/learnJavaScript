//// Manipulating Complex Objects

// A JS obect is a way to store flexible data
// We can store strings, numbers, arrays, and even other objects

//Example
var myMusic = [
    {
        "artist": "PARTYNEXTDOOR",
        "song_title": "RENDEZVOUS",
        "release_year": 2020,
        "formats": [
            "CD",
            "Vinyl",
            "Digital"
        ],
        "gold": true
    }, // after each array element you MUST add a comma
    {
        "artist": "KO Beatz",
        "song_title": "Mystic",
        "release_year": null, // unreleased
        "formats": [
            "Digital",
            "Full Project File (Presonus Studio One, version 4)"
        ]
    }
];

/**
 * NOTE:
    Our variable is an array, which is defined by the square brackets
    Inside that array, we have an object - defined by the curly braces

 * In Summary:
    ARRAYS are defined by []
    OBJECTS are defined by {}
*/