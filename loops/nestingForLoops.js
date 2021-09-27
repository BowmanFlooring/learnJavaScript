//// Nesting For Loops

// If you have a multidimentional (nested) array, you can use
// nested for loops to access all the array elements

// Example
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        // arr.length will start off as 3
        // the 'product' var. below has 3 arrays within the main array
        for (var j = 0; j < arr[i].length; j++) {
            // in each iteration of the outer for loop, we're
            // 1. checking length of first array
            // 2. checking length of second array
            // 3. checking length of third array
            product *= arr[i][j];
        }
    }

    return product;
};

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product); RSLT: 5040