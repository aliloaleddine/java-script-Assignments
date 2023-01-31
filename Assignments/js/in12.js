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
console.log("Assignments 4");
function checkStatus(a = "Unknown", b = "Unknown", c = false) {
  let Name;
  let Age;
  let Status;
  let info = [a, b, c];

  for (i = 0; i < 3; i++) {
    typeof info[i] == "string"
      ? (Name = info[i])
      : typeof info[i] == "number"
      ? (Age = info[i])
      : info[i] == true
      ? (Status = "Your Are Available For Hire")
      : (Status = "Your Are Not Available For Hire");
  }

  console.log(`Hello ${Name}, Your Age Is ${Age},${Status}`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log("---------------");
document.write("<h1>Assignments 5 </h1>");
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option> ${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
document.write("<hr>");

console.log("Assignments 6");
function multiply(...numbers) {
  let m = 1;
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] == "string") {
      continue;
    } else if (numbers[i] % 1 != 0) {
      numbers[i] = parseInt(numbers[i]);
    }
    m *= numbers[i];
  }
  console.log(m);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
console.log("---------------");
