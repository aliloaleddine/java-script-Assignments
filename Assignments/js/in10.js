console.log("Assignments 1");
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i !== exclude) {
    console.log(i);
  }
}
console.log("---------------");

console.log("Assignments 2");
let start1 = 10;
let end1 = 0;
let stop1 = 3;

for (let i = start1; i >= end1; i--) {
  i < 10 ? console.log("0" + i) : console.log(i);
  if (i == stop1) {
    break;
  }
}
console.log("---------------");

console.log("Assignments 3");
let start2 = 1;
let end2 = 6;
let breaker2 = 2;
for (i = start2; i <= end2; i++) {
  console.log(i);
  for (j = start2 + start2; j < end2; j += breaker2) {
    console.log("--" + j);
  }
}
console.log("---------------");
console.log("Assignments 4");

let index4 = 10;
let jump4 = 2;
let end4 = 0;
i = index4;
for (;;) {
  console.log(i);
  if (i == end4 + jump4) break;
  i -= jump4;
}

console.log("---------------");

console.log("Assignments 5");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
j = friends.length - friends.length;
for (i = friends.length - friends.length; i < friends.length; i++) {
  if (friends[i][friends.length - friends.length] !== letter.toUpperCase()) {
    j++;
    console.log(j + "=>" + friends[i]);
  }
}

console.log("---------------");
console.log("Assignments 6");
let start6 = 0;
let swappedName6 = "elZerO";
let newString = [];
for (i = start6; i < swappedName6.length; i++) {
  if (swappedName6[i] === swappedName6[i].toUpperCase()) {
    newString[i] = swappedName6[i].toLowerCase();
  } else {
    newString[i] = swappedName6[i].toUpperCase();
  }
}
console.log(newString.join(""));

// Output
("ELzERo");
console.log("---------------");

console.log("Assignments 7");

let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];
for (i = start7; i < mix7.length; ) {
  i++;
  if (typeof mix7[i] == "number") {
    console.log(mix7[i]);
  }
}
console.log("---------------");

// Output
2;
3;
4;
