// ? Get user input using prompt("Enter your age:"). If user is 18 or older, give feedback:"You are old enough to drive"
// ? but if not 18 give another feedback stating to wait for the number of years he needs to turn 18'

const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("Enter your age:");
if (age == 10) {
  console.log("You are old enough to drive");
} else {
  console.log(`wait for ${18 - age} more years to turn 18 years old`);
}
