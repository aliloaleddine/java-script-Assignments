console.log("Assignments 1");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMixString = mix
  .map(function (el) {
    return typeof el == "string" ? el : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(newMixString);
console.log("---------------");

console.log("Assignments 2");
let myString = "EElllzzzzzzzeroo";
let myNewString = myString
  .split("")
  .filter(function (el, indx, arr) {
    return arr[indx] !== arr[indx + 1];
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(myNewString);
console.log("---------------");
console.log("Assignments 3");

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myNewArray = myArray.reduce(function (acc, current) {
  return typeof current !== "object" ? acc + current : acc + current.join("");
});
console.log(myNewArray);

console.log("---------------");

console.log("Assignments 4");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsAndStringsNews = numsAndStrings
  .filter(function (el) {
    return typeof el == "number";
  })
  .map(function (el) {
    return -el;
  });
console.log(numsAndStringsNews);

// [-1, -10, 10, 20, -5, -3]
console.log("---------------");
console.log("Assignments 5");
let nums = [2, 12, 11, 5, 10, 1, 99];
let numsNew = nums.reduce(function (acc, current) {
  return current % 2 !== 0 ? acc + current : acc * current;
}, 1);
console.log(numsNew);
console.log("---------------");

// 500
