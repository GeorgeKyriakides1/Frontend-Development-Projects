/* Problem - To compute and display the factorial of a given whole number. */

(function factorial() {
    // Declare and initialise the factorial variable.
    var factorial = 1;
    // Declare and intialise the number variable which will be used to get the user to input a number between 1 and 10.
    var number = prompt("Enter a whole number: ");
    // while the input is not a whole number, then keep reasking the user to enter a whole number.
    while (number % 1 != 0 || number < 0 || number == null || number == "") {
        number = prompt("ERROR: " + number + " is not a whole number. Please enter a whole number: ");
    }
    // for each time the index is less or equal to the number then the for loop is entered. Otherwise, the for loop is skipped.
    for (var i = 1; i <= number; i++) {
        factorial *= i; // formula: factorial = factorial * index
    }
    // Output the factorial of the number.
    console.log("The factorial of " + number + " is " + factorial + ".");
})();