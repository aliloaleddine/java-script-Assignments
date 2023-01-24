console.log("Assignments 1");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.reverse().splice(-num).reverse()); // ["Ahmed", "Elham", "Osama"];
console.log("---------------");

console.log("Assignments 2");
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(num / num, num - num / num)); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
console.log("---------------");

console.log("Assignments 3");
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[num - num / num][num - num].slice(--num).toLocaleUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
console.log(haystack.concat(needle));
haystack.splice(haystack.length, 0, needle);
console.log(haystack);
haystack.push(needle);
console.log(haystack);

console.log(haystack.includes(needle) ? "found" : undefined);
// Write 3 Solutions
console.log("---------------");

console.log("Assignments 4");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
console.log(
  allArrs
    .concat(arr2[num], arr1[num], arr2[num + num / num])
    .join("")
    .toLocaleLowerCase()
); // fxy
