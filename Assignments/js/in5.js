// str Assignments 1
console.log("Assignments 1");
let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.split("", 1).toString().toLocaleLowerCase()); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.substring(3, 4).repeat(3)); // eee
console.log("----------------");

// str Assignments 2
console.log("Assignments 2");
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True
console.log("----------------");
