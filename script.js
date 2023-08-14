//1
// const age = prompt("Enter your age:")

// if(age >= 18){
//     console.log("You are old enough to drive")
// }else if(age < 18 && age >= 0){
//     console.log(`You are left with ${18- age} years to drive`)
// }else{
//     console.log("You weren't born yet")
// }

//2
// const age = prompt("Enter your age:")
// const myAge = 24

// if(age > myAge){
//     console.log(`You are ${age - myAge} years older than me`)
// }else if(age == myAge){
//     console.log("We are in the same age")
// }else{
//     console.log(`I am ${myAge - age} years older than you`)
// }

//3
// let a = 4
// let b = 3

// let result = (a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);

//4
// let result = (age % 2 == 0) ? console.log(`${age} is an even number`) : console.log(`${age} is an odd number`)

//5
// const age = prompt("Enter month:")
// let result = (age > 79 && age < 101) ? console.log("A") : (age > 69 && age < 80) ? console.log("B") 
// : (age > 59 && age < 70) ? console.log("C") : (age > 49 && age < 60) ? console.log("D") 
// : (age >= 0 && age < 50) ? console.log("E") : console.log("Invalid")

//6
// let result =
//     (age.toLowerCase() === "december" || age.toLowerCase() === "january" || age.toLowerCase() === "february") ? "Winter" :
//     (age.toLowerCase() === "march" || age.toLowerCase() === "april" || age.toLowerCase() === "may") ? "Spring" :
//     (age.toLowerCase() === "june" || age.toLowerCase() === "july" || age.toLowerCase() === "august") ? "Summer" :
//     (age.toLowerCase() === "september" || age.toLowerCase() === "october" || age.toLowerCase() === "november") ? "Autumn" :
//     "Invalid";

// console.log(result);

//7
const month = prompt("Enter month:");
let result =
    (month.toLowerCase() === "january" || month.toLowerCase() === "march" || month.toLowerCase() === "may" || month.toLowerCase() === "july" ||
     month.toLowerCase() === "august" || month.toLowerCase() === "october" || month.toLowerCase() === "december") ?
    `${month} has 31 days` :
    (month.toLowerCase() === "april" || month.toLowerCase() === "june" || month.toLowerCase() === "september" || month.toLowerCase() === "november") ?
    `${month} has 30 days` :
    (month.toLowerCase() === "february") ?
    `${month} has 28 days` :
    "Invalid";

console.log(result);