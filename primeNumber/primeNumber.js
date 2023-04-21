/* Problem - To compute and display whether a given whole number between 1 and 10 is a prime number. */

(function primeNumber() {
    // Declare and initialise check for prime number to true.
    var isPrimeNumber = true;
    // Declare and intialise the number variable which will be used to get the user to input a whole number between 1 and 10.
    var number = prompt("Enter a whole number between 1 and 10: ");
    // while the input is not a whole number between 1 and 10, then keep reasking the user to enter whole number between 1 and 10.
    while (number % 1 != 0 || number < 1 || number > 10) {
        number = prompt("ERROR: " + number + " is not a whole number between 1 and 10. Please enter a whole number between 1 and 10: ");
    }
    // if the number is equal to 1 then set the check for prime number to false.
    // else the number is greater than 1 so calculate whether or not the number is a prime number.
    if (number == 1) {
        isPrimeNumber = false;
    } else {
        // for each time the index is less than the number then the for loop is entered. Otherwise, the for loop is skipped.
        for (var i = 2; i < number; i++) {
            // if the number modulus the index equals 0 then set the check for prime number to false and break out of the loop.
            if (number % i == 0) {
                isPrimeNumber = false;
                break;
            }
        }
    }
    // if the number is prime then output that it's a prime number.
    // else output that it's not a prime number.
    if (isPrimeNumber) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }
})();