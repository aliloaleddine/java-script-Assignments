// str Assignments 1
console.log("Assignments 1");
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(!-50 == !+"-40"); // true
console.log(!10 == !-"-40"); // true
console.log(!"10" == !10); // true
console.log(!20 == false); // true
console.log("----------------");

// str Assignments 2
console.log("Assignments 2");
let num1 = 10;
let num2 = 20;

console.log(!num1 == false); // true
console.log(!num2 == false); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(!(num1 == num2)); // true
console.log(!(num1 === num2)); // true
console.log("----------------");

// str Assignments 3
console.log("Assignments 3");
let a = 20;
let b = 30;
let c = 10;

console.log((a == b && a == c) || a != b); // true
console.log(a != b && a != c); // true
console.log(!(a == b) && !(a == b) && !(a == c) && !(a == c)); // true
console.log("----------------");
