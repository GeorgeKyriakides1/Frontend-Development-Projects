/* Problem - Write a program that prints the numbers from 1 to 100. However, for multiples of three print "Fizz" instead of the 
   number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

(function numbers() {
   // for loop iterates from 1 until it reaches 100 which is inclusive and outputs the counter value as well as the string value.
   for (var i = 1; i <= 100; i++) {
      // str variable used to add word/s to empty string depending on if the counter (i) value meets one or both of the rules. 
      var str = ""; 
      // if i mod 3 == 0, add Fizz to the string.
      if (i % 3 == 0) {
         str += "Fizz";
      } 
      // if i mod 5 == 0, add Buzz to the string.
      if (i % 5 == 0) {
         str += "Buzz";
      } 
      // Output the counter (i) value and the str value.
      console.log(i + " " + str);
   }
})();