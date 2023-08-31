//1
const age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive");
} else if (age < 18 && age >= 0) {
  console.log(`You are left with ${18 - age} years to drive`);
} else {
  console.log("You weren't born yet");
}

//2
const age2 = prompt("Enter your age:");
const myAge = 24;

if (age2 > myAge) {
  console.log(`You are ${age2 - myAge} years older than me`);
} else if (age2 == myAge) {
  console.log("We are in the same age");
} else {
  console.log(`I am ${myAge - age2} years older than you`);
}

//3
let a = 4;
let b = 3;

let result = a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
console.log(result);

//4
let result2 =
  age % 2 == 0 ? `${age} is an even number` : `${age} is an odd number`;
console.log(result2);

//5
const value = prompt("Enter value:");
let result3 =
  value > 79 && value < 101
    ? "A"
    : value > 69 && value < 80
    ? "B"
    : value > 59 && value < 70
    ? "C"
    : value > 49 && value < 60
    ? "D"
    : value >= 0 && value < 50
    ? "E"
    : "Invalid";
console.log(result3);

//6
const month = prompt("Enter month:");
let result4 =
  month.toLowerCase() === "december" ||
  month.toLowerCase() === "january" ||
  month.toLowerCase() === "february"
    ? "Winter"
    : month.toLowerCase() === "march" ||
      month.toLowerCase() === "april" ||
      month.toLowerCase() === "may"
    ? "Spring"
    : month.toLowerCase() === "june" ||
      month.toLowerCase() === "july" ||
      month.toLowerCase() === "august"
    ? "Summer"
    : month.toLowerCase() === "september" ||
      month.toLowerCase() === "october" ||
      month.toLowerCase() === "november"
    ? "Autumn"
    : "Invalid";

console.log(result4);

//7
const month2 = prompt("Enter month:");
let result5 =
  month2.toLowerCase() === "january" ||
  month2.toLowerCase() === "march" ||
  month2.toLowerCase() === "may" ||
  month2.toLowerCase() === "july" ||
  month2.toLowerCase() === "august" ||
  month2.toLowerCase() === "october" ||
  month2.toLowerCase() === "december"
    ? `${month2} has 31 days`
    : month2.toLowerCase() === "april" ||
      month2.toLowerCase() === "june" ||
      month2.toLowerCase() === "september" ||
      month2.toLowerCase() === "november"
    ? `${month2} has 30 days`
    : month2.toLowerCase() === "february"
    ? `${month2} has 28 days`
    : "Invalid";

console.log(result5);
