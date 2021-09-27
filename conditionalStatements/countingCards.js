//--------//--------//--------//--------//--------//--------//--------//--------
// Counting Cards

// This is going to be a blackjack 'card-counting' function

/**
 * Here's how it's going to work:
 * 
 * When you see a low card, the count goes up
 * When you see a high card, the count goes down
 * When you see a mid-value card, the count stays the same
 * 
 * When the count is positive, the player should bet high
 * When the count is zero or negative, the player should bet low
 */

var count = 0;
// Our initial count value is set to zero
// Depening on what the card is, it's going to either
// increase, decrease, or do nothing to the global count variable

function cc(card) {
    // If card drawn is a 2, 3, 4, 5, or 6 - increase 'count' variable
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count + 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdBet = "Hold";
    if (count > 0) {
        holdBet = "Bet";
    }

    return count + " " + holdBet;
    // We're returning 2 things:
    // 1. The current count value, and
    // 2. whether the player should bet or hold
}

cc(2); cc(2); cc(2); cc(9); cc(4);
console.log(cc(4));