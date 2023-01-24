// str Assignments  1
// unknown id
document.getElementById("el").style.color = "red";
// Code Two
window.onload = function () {
  document.getElementById("el").style.color = "yellow";
};
// Code Three
document.getElementById("el").style.color = "red";
// end Assignments  1

// str Assignments  2
document.write("<h1>Assignments 2</h1>");

document.write(
  "<h1 style='color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial'>hi am alilo</h1> <hr/>"
);
// end Assignments  2

// str Assignments  3
console.log("Assignments  3");
console.log(
  "%cElzero %cWeb %cScholl",
  "font-size:40px;color:red",
  "font-weight:bold; font-size:40px",
  "background-color:blue;color:white; font-size:40px"
);
console.log("---------------------");

// end Assignments  3

// str Assignments  4
console.log("Assignments  4");
console.group("%c group 1", "font-weight:bold;font-size:19px");
console.log("Message one");
console.log("Message Two");
console.group("%c child group", "font-weight:800;font-size:18px");
console.log("Message one");
console.log("Message Two");
console.group("%c grand child group", "font-weight:700;font-size:17px");
console.log("Message one");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("%c group 2", "font-weight:bold;font-size:18px");
console.log("Message one");
console.log("Message Two");
console.log("---------------------");

// end Assignments  4

// str Assignments  5
console.log("Assignments  5");
console.table(["alilo", "arbi", "babhi", "khadija", "osama"]);
console.log("---------------------");
// end Assignments  5

// str Assignments  6
// console.log("Iam In Console");
// document.write("Iam In Page");
/* console.log("Iam In Console");
document.write("Iam In Page");*/

// end Assignments  6
