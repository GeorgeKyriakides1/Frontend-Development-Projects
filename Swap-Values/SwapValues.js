/* Problem - Swap the following values, A = 10 and B = 20, without using a third variable. */

function SwapValues(A = 0, B = 0) {
    A = A + B; // A = 30
    B = A - B; // B = 10
    A = A - B; // A = 20
    return A + ", " + B; // 20, 10
}

// Output to console. 
console.log(SwapValues(10, 20));