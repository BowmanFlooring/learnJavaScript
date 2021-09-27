//--------//--------//--------//--------//--------//--------//--------//--------
// Chaining If Else Statements

// We can also chain 'if' and 'else-if' statements

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(3)); // RSLT: Tiny
console.log(testSize(8)); // RSLT: Small
console.log(testSize(13)); // RSLT: Medium
console.log(testSize(18)); // RSLT: Large
console.log(testSize(23)); // RSLT: Huge