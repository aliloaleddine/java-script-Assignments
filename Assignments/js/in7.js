console.log("Assignments 1");
// Test Case 1
let num1 = 9; // "009"
num1 <= 10 ? console.log("00" + num1) : undefined;
// Test Case 2
let num2 = 20; // "020"
num2 > 10 || num2 < 100 ? console.log("0" + num2 + "0") : undefined;

// Test Case 3
let num3 = 110; // "110"
num3 >= 10 || num3 < 100 ? console.log(num3) : undefined;
console.log("----------------------");

console.log("Assignments 2");

let num20 = 9;
let str = "9";
let str2 = "20";

// Output
if (num20 == str) {
  console.log(`${num1} Is The Same Value As ${str}`);
}
if (num20 == str) {
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}
if (num20 !== str2)
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
if (str != str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
console.log("----------------------");
console.log("Assignments 3");

// Edit What You Want Here

let num11 = 11;
let num21 = 10;
let num31 = 11;
let num41 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num11 > num21) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num11 > num21 && num11 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num11 > num21 && num11 === num31) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num11 + num21 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num11 + num31 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num11 + num21 + num31 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num41 - (num11 + num31) + num21 === 21) {
  console.log("True");
} else {
  console.log("False");
}
console.log("----------------------");
