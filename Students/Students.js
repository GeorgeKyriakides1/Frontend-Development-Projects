/* Problem - Write a program that prints the names and numbers of students in a list in alphabetical and numerical order so the first student gets the lowest student number.
   *** Example Output: ***
   Name: Nathan
   Number: 894212 
   Name: Peter
   Number: 980332
*/

(function Students() {
    // Declare and initialise variables.
    var studentNames = ["Cristiano", "Peter", "Jay", "Nathan", "Anthony"]; // Student names array holds the names of all the students.
    var studentNumbers = [607890, 600321, 394032, 894212, 980332]; // Student numbers array holds the numbers of all the students.
    var studentList = ""; // Student list string to be used to gather the names of all the students.

    // Sort the studentNames and studentNumbers arrays into alphabetical order before entering the for loop.
    studentNames.sort();
    studentNumbers.sort();

    // for loop iterated through until the counter (i) has reached the studentNames array end point where each name is added to the studentList string.
    for (var i = 0; i < studentNames.length; i++) {
        // if counter (i) equals the length of the studentNames array then output the name only as it has reached the end of the array.
        // else output the name with the comma and space until the end of the array is reached.
        if ((i+1) == studentNames.length) {
            studentList += "Name: " + studentNames[i] + "\n" + "Number: " + studentNumbers[i];
        } else {
            studentList += "Name: " + studentNames[i] + "\n" + "Number: " + studentNumbers[i] + "\n\n";
        }
    }

    // Output to console. 
    console.log("\nStudent List: " + "\n\n" + studentList);
})();