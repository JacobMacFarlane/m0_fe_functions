// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
    console.log("Hi, how are you doing? I hope you are having a good time!");
}
printGreeting()
printGreeting()
printGreeting()
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function oneArgument(arguing){
    console.log(`This function will contain me ${arguing}`);
}
console.log("arguing")


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. 
//The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function estimatedPay(company, minPay, maxPay) {
    let range = maxPay - minPay;
    console.log(`The company named ${company} has had a pay range between ${minPay} and ${maxPay} and has a range of ${range}`);
}
estimatedPay("Dunder Mifflin", "70000", "180000")

// 4: Write a function that satifies the following interaction pattern:
function checkStock(amount, item) {
  if (amount === 0) {
    console.log(`"${item}- OUT of stock!"`)
  } else if 
    (amount >= 4) {
    console.log(`"${item} is stocked"`)
  } else if {
    console.log(`"${item} - running LOW"`)
  }
  }
checkStock(4, "Coffee");
checkStock(3, "Tortillas");
checkStock(0, "Cheese");
checkStock(1, "Salsa");
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"