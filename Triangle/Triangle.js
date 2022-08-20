/* Problem - Write a program that displays the following triangle n×n (n=5) pattern using nested for-loops.
   Expected Output: 
   *  
   *  *  
   *  *  *  
   *  *  *  *  
   *  *  *  *  *  
*/

(function Triangle() {
    // Declare and initialise variables
    var triangleShape = 5;
    var displayObj = "";

    // for loop with nested for loop is set out as follows:
    // Outer for loop is iterated through until i is equal to the value (size) of the desired triangle.
    // Inner for loop is iterated through while j is less or equal to the i counter which ends once the i counter is equal to the triangleShape value.
    for (var i = 1; i <= triangleShape; i++) {
        for (var j = 1; j <= i; j++) {
            displayObj += "*  ";
        }
        console.log(displayObj);
        displayObj = "";
    }
})();