/* Problem - Reverse the following numbers, 10, 3, 23, 1, 5, 3, 2, 99, 40, without using any inbuilt functions e.g. sort(). */

(function sortNumbers() {
    // Bubble Sort Algorithm 
    // 1. Create an array to hold the numbers in. 
    var numberList = [10, 3, 23, 1, 5, 3, 2, 99, 40]; // Before Sorting: 10, 3, 23, 1, 5, 3, 2, 99, 40 || After Sorting: 1, 2, 3, 3, 5, 10, 23, 40, 99
    // numberList.sort(function(a, b){return a-b})); --> This is used to sort number arrays in ascending order.
    // numberList.sort(function(a, b){return b-a}); --> This is used to sort number arrays in descending order.

    // 2. Two for loops used to sort the numberList array.
    // 2-1. Outer for loop is used to iterate through the numberList array while i being the current index is less than numberList length. i is the current index in the array.
    for (var i = 0; i < numberList.length; i++) {
        // 2-2. Inner for loop is used to iterate through the numberList array while j is less than numberList length. j is the next index in the array.
        for (j = i + 1; j < numberList.length; j++) {
            // 3. if loop used while numberList[i] being the current index of the numberList array, is larger than the next index being numberList[j].
            // e.g. [10, 3, 23, 1, ...]  where i = 0 and j = i + 1 = 1 so i = 10 and j = 3 so 10 > 3 which means numberList[i] gets set to 3 and numberList[j] gets set to 10. 
            if (numberList[i] > numberList[j]) {
                holdingValue = numberList[j];
                numberList[j] = numberList[i];
                numberList[i] = holdingValue;
            }
        }
    }

    // 4. Output to Console
    console.log(numberList);
})();