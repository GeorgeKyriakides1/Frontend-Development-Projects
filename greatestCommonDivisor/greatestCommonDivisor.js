/* Problem - Find the greatest common divisor of two numbers.
   example 1: 4, 6 == 2
   example 2: 2, 3 == 1
*/

// My Example - 30, 12 == 6
function greatestCommonDivisor(x = 0, y = 0) {
    // if x = y, then return the value of x.
    // else if x > y, then let x = x - y and return to Step 1.
    // else x < y, then let y = y - x and return to Step 1.
    if (x == y) {
        return x;
    } else if (x > y) {
        return greatestCommonDivisor(x - y, y);
    } else {
        return greatestCommonDivisor(x, y - x);
    }
}

// Output to console.
console.log(greatestCommonDivisor(30, 12)); 