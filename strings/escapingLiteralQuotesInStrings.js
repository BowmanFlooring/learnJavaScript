//--------//--------//--------//--------//--------//--------//--------//--------
// Escaping Literal Quotes In Strings

// Sometimes we want quoted text inside of our strings
// In order to properly use quotation marks inside of a string, use the '\'
// to 'escape' the character and render it a 'literal quotation mark'

var myStr = 'I am a \'single-quoted\' string inside \'single quotes\'';

console.log(myStr);
/**
 * RESULT: I am a 'single-quoted' string inside 'single quotes'
 */