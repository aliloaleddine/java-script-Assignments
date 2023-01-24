console.log("Assignments 1");

let day = "   friday  ";
day = day.trim()[0].toLocaleUpperCase() + day.trim().substr(1, day.length);
console.log(day);
// Output => "Its Not A Valid Day"
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log(" From 10:00 AM To 5:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
}
console.log("---------------");
