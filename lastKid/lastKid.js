/* Problem - Find the last kid who received a toy where:
   - n kids are sitting in a circle
   - k toys available to distribute
   - i position to start from
   e.g. n,k,i => 3, 5, 1 = 2 where 2 is the final kid to receive a toy being kid number two.
*/

// My Example - 5, 13, 1 = 3
function lastKid(n = 0, k = 0, i = 0) {
    // for loop to iterate through array and find the final kid to receive a toy.
    if (k > n) {
        return i + (k % n) - 1;
    } else {
        return i + n - 1;
    }
}

// Output to console.
console.log(lastKid(5, 13, 1));