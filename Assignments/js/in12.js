console.log("Assignments 1");
function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
console.log("---------------");

console.log("Assignments 2");
function calculate(firstNum, secondNum, operation) {
  if (secondNum !== undefined) {
    if (operation == "add") {
      console.log(firstNum + secondNum);
    } else if (operation == "subtract" || operation == "Undefine") {
      console.log(firstNum - secondNum);
    } else if (operation == "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  } else {
    console.log("Second Number Not Found");
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
console.log("---------------");

console.log("Assignments 3");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 110) {
    console.log(`Your age in years is ${theAge}`);
    console.log(`Your age in Months is ${theAge * 12}`);
    console.log(`Your age in weeks is ${theAge * 12 * 4}`);
    console.log(`Your age in days is ${theAge * 12 * 30}`);
    console.log(`Your age in hours is ${theAge * 365 * 24}`);
    console.log(`Your age in minutes is ${theAge * 365 * 24 * 60}`);
    console.log(`Your age in seconds is ${theAge * 365 * 24 * 60 * 3600}`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
console.log("---------------");
