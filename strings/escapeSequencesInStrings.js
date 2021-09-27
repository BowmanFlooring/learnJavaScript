//--------//--------//--------//--------//--------//--------//--------//--------
// Escape Sequences In Strings

/*****
CODE   OUTPUT
\'     single quote
\"     double quote
\\     backslash
\n     newline
\r     carriage return
\t     tab
\b     backspace
\f     form feed
*****/

// Example

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

/**
 * RESULT:
*  FirstLine
*          \SecondLine
*  ThirdLine
 */