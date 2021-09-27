//--------//--------//--------//--------//--------//--------//--------//--------
// Assignment With a Returned Value

// It's simple to assign a returned value to a variable

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

//--------------------------------------

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);