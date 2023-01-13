// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}
nameQuestion();
// For example 1 i added a semi colon to the end of line 12 to practice good habits

// EX 2:
function addThreeNums(first, second, third) {
   var sum = first + second + third;
   console.log(sum);
 }

 addThreeNums(1, 2, 3);
 addThreeNums(4, 2, 7);
// For example 2 I started by indenting lines 19 and 20
// This causes it to look cleaner. Then i deleted the spaces in front of the curly
// brackets on line 21 so it wasnt as spaced out
// I then ended by adding a semi colon to line 19 to practice good habits

// // EX 3:
function makeFreshPesto() {
   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
   console.log("Pulse basil and pine nuts");
   console.log("Add garlic and cheeses");
   console.log("Slowly pour in oil");
   console.log("Season");    
}
makeFreshPesto();
// For example 3 I started by spacing the curly bracket one space away from the parenthesis on line 31
// Then i also pushed the last curly bracket down to line 37 where it was on line 36
// by putting the curly bracket it makes it easier to identify that lines 32-36 are within the function


// EX 4:
function average(num1, num2) {
   var sum = num1 + num2;
   var avg = sum / 2;
   console.log(`the average is: ${avg}.`);
}

average(87, 23);
// For example 4 I started by moving the first curly bracket up to the end of line 45 with a space seperating it from the parenthesis
// then i indented line 46 so that the innards of the function could look cleaner
// next i deleted the line that was seperating 48 and 47 so the the block of code could all be together
// Then i went to run the code in replit and got an error and saw that the closing backtick on line 48
// was in front of the period when it was supposed to be behind the period. This is because the backticks are supposed to contain everything
// within the parenthesis in the console.log statement. I ended the edits by adding semi colons to the end of line 48
// If you were to want to successfully get an output for this function you would just have to put 2 numbers seperated by a comma
// in the average function on line 51