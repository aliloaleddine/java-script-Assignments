console.log("Assignments 1");

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.slice(0, zName.indexOf(" "))} ${zName[
      zName.indexOf(" ") + 1
    ].toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return `Your Age Is ${zAge.slice(0, zAge.indexOf(" "))}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `You Live In ${zCountry.slice(0, 3).toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern(zName)} , ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
console.log("---------------");

console.log("Assignments 2");
//normal function
// function itsMe() {
//   return `Iam A Normal Function`;
// }

//Arrow  function
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

//normal function
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

//Arrow  function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log("---------------");

console.log("Assignments 3");
//normal function
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }

//Arrow  function
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log("---------------");

console.log("Assignments 4");
function specialMix(...data) {
  let s = 0;

  for (i = 0; i < data.length; i++) {
    if (parseInt(data[i]) % 1 == 0) s += parseInt(data[i]);
  }
  if (s === 0) {
    return `All Is Strings`;
  } else {
    return s;
  }
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log("---------------");
