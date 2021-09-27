//--------//--------//--------//--------//--------//--------//--------//--------
// Golf Code

// In the game of golf, each hole has a par
// 'Par' is the average number of strokes you're supposed to
// use to get the golf ball in the cup

// Depending on how far above or below par your number of strokes are,
// there's a different nickname for each

// We're going to write a function where you pass in the par, and you also
// pass in the strokes, and it will return the nickname

// Here's a little guide I built...

/**
 * Strokes       Return
 * 1             "Hole-In-One!"
 * <= par -  3   "Albatross" 
 * par -  2      "Eagle"
 * par -  1      "Birdie"
 * par           "Par"
 * par +  1      "Bogey"
 * par +  2      "Double-Bogey"
 * par +  3      "Triple-Bogey"
 * >= par +  4   "Go Home!"
 */

var names = [
    "Hole-In-One!",
    "Albatross",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double-Bogey",
    "Triple-Bogey",
    "Go Home!"
];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 3) {
        return names[1];
    } else if (strokes == par - 2) {
        return names[2];
    } else if (strokes == par - 1) {
        return names[3];
    } else if (strokes == par) {
        return names[4];
    } else if (strokes == par + 1) {
        return names[5];
    } else if (strokes == par + 2) {
        return names[6];
    } else if (strokes == par + 3) {
        return names[7];
    } else {
        return names[8];
    }
}

console.log(golfScore(3, 1)); // RSLT: Hole-In-One!
console.log(golfScore(5, 2)); // RSLT: Albatross
console.log(golfScore(3, 2)); // RSLT: Birdie

// It works!! 