window.onload = function () {
  // str Assignments 1
  console.log("Assignments 1");
  // Replace ? With Arithmetic Operators
  console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0
  console.log("------------------------");
  // end Assignments 1

  // str Assignments 2
  console.log("Assignments 2");
  let num = 3;
  // let b = true;
  // Solution One
  console.log(num + num); // 6

  // Solution Two
  console.log(++num + true + true); // 6
  // Soultion Three
  console.log(++num - num++ + num); // 6

  // Soultion Four
  console.log(num); // 6

  // Solution Five
  console.log(++num - true); // 6

  // Solution Six
  console.log(num - true); // 6
  console.log("------------------------");
  // end Assignments 2

  // str Assignments 3
  console.log("Assignments 3");
  let num1 = "10";

  // Solution One
  console.log(+num1 + +num1); // 20

  // Solution Two
  console.log(num1 * (true + true)); // 20

  // Solution Three
  console.log(num1++ - true + num1); // 20

  // Solution Four
  console.log(num1 * num1-- - true - num1 * num1); // 20
  console.log("------------------------");

  // str Assignments 4
  console.log("Assignments 4");
  let points = 10;

  // Write Your Code Here

  console.log(points-- + true + true + true); // 13

  // Write Your Code Here

  console.log(--points); // 8;
  console.log("------------------------");
};
