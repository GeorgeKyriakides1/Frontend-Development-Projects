/* Problem - Write a program that prints the names and numbers of students in a list in alphabetical and numerical order so the first student gets the lowest student number.
   *** Example Output: ***
   Name: John
   Number:  609901 
   Name: Lauren
   Number: 908218
*/

(function Students() {
    /* Alternative Array Listing:
    var studentNames = new Array();
    studentNames[0] = "John";
    studentNames[1] = "Peter";
    studentNames[2] = "Jay"; 
    studentNames[3] = "Nathan";
    studentNames[4] = "Anthony"; */

    // Declare and initialise variables.
    var studentNames = ["John", "Peter", "Jay", "Nathan", "Anthony"]; // Student names array holds the names of all the students.
    var studentNumbers = [607890, 600321, 394032, 894212, 980332]; // Student numbers array holds the numbers of all the students.
    var studentList = ""; // Student list string to be used to gather the names of all the students.
    var studentNumStr = ""; // Student number string used to hold the student numbers as strings to then be added to the studentList string.

    // Sort the studentNames and studentNumbers arrays into alphabetical order before entering the for loop.
    studentNames.sort();
    studentNumbers.sort();

    // for loop iterated through until the counter (i) has reached the studentNames array end point where each name is added to the studentList string.
    for (var i = 0; i < studentNames.length; i++) {
        // if counter (i) equals the length of the studentNames array then output the name only as it has reached the end of the array.
        // else output the name with the comma and space until the end of the array is reached.
        if ((i+1) == studentNames.length) {
            studentNumStr = studentNumbers[i].toString();
            studentList += "Name: " + studentNames[i] + "\n" + "Number: " + studentNumStr;
        } else {
            studentNumStr = studentNumbers[i].toString();
            studentList += "Name: " + studentNames[i] + "\n" + "Number: " + studentNumStr + "\n\n";
        }
    }

    // Output to console. 
    console.log("\nStudent List: " + "\n\n" + studentList);
})();