// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
// str Assignments 1
console.log("Assignments 1");
console.log(1 * 100000); // 100000
console.log(5e4 * 2); // 100000
console.log(99999 + 1); // 100000
console.log(parseInt("100000")); // 100000
console.log(100000 / 1); // 100000
console.log(1e5); // 100000
console.log(100001 - 1); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 ** 5); // 100000
console.log(100000.0); // 100000
console.log("----------------");
// str Assignments 2
console.log("Assignments 2");
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log("----------------");

// str Assignments 3
console.log("Assignments 3");
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
console.log("----------------");

// str Assignments 4
console.log("Assignments 4");
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
console.log("----------------");

// str Assignments 5
console.log("Assignments 5");
let flt = 10.4;
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.ceil(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log("----------------");

// str Assignments 6
console.log("Assignments 7");
console.log(Math.trunc(5 * Math.random())); // 0 || 1 || 2 || 3 || 4
console.log("----------------");
