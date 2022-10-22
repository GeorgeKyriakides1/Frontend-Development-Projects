/* Problem - Reverse the string, "Hello", without using any inbuilt functions. */

function reverseString(str = "") {
    // 1. An empty string is created to hold the new string.
    var newString = "";

    // 2. for loop used to iterate through the given string until it reaches the end of it.
    // The start point of the loop will be (str.length - 1) which is to equal to the last character of the string, "o" which is at index 4.
    // NOTE: Strings in JavaScript have an extra element which is why subtracting 1 is required to start at index 4 being the last character of the string, "o".
    // As long as i is greater than or equal to 0, the loop will go on. 
    // Decrement i after each iteration.
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    // 3. Return the new string.
    return newString;
}

// Output to console.
console.log(reverseString("Hello"));