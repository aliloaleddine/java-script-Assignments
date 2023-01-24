window.onload = function () {
  // str Assignments 1
  console.log("Assignments 1");
  // Add Variables Here
  let numberOne = 10;
  let numberTwo = 20;
  // Ouput
  console.log("" + numberOne + numberTwo); // Normal Concatenate => 1020
  console.log(typeof ("" + numberOne + numberTwo)); // Normal Concatenate => String
  console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
  console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

  console.log(numberOne + "\n" + numberTwo);
  /*
  Normal Concatenate
  20
  10
*/

  console.log(`${numberOne}
${numberTwo}`);
  /*
  Template Literals Way
  20
  10
*/
  console.log("------------------------");
  // end Assignments 1

  // str Assignments 2
  console.log("Assignments 2");

  console.log(elzero.innerHTML); // object
  console.log(typeof elzero); // object
  console.log("------------------------");

  // str Assignments 3
  console.log("Assignments 3");
  console.log(
    '\'I\'m In \n\\\\ \nLove \\\\ """ \'\'\' \n++ with ++ \n\\""""\\""" \n""JavaScript""``'
  );
  /* 
`I'm In
 \\
 Love \\ """ '''
 ++ With ++
 \"""\"""
 ""JavaScript"" ``
 */
  console.log("------------------------");

  console.log("Assignments 4");

  let a = 23;
  let b = 20;
  console.log(`_${a}${("_" + b + a).repeat(3)}_${b}_`); // _23_2023_2023_2023_20_
  console.log("------------------------");
};
