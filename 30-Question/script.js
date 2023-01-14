// program to create a simple calculator using the if else in javascript.
// take the operator from the user through prompt box in javsscript
const operator = prompt(
  "Enter operator to perform the calculation(either +, -, * or /):"
);

// accept the number from the user through prompt box
const number1 = parseFloat(prompt("Enter the first number"));
const number2 = parseFloat(prompt("Enter the second number"));

let result; // delcaration of the variable.

// use it, elseif and else keyboard to define the calculator condition in Javascript.
if (operator == "+") {
  // use + (addition) operator to add two numbers
  result = number1 + number2;
} else if (operator == "-") {
  // use - (subtraction) operator to subtract two numbers
  result = number1 - number2;
} else if (operator == "*") {
  // use * (multiplication) operator to multiply two numbers
  result = number1 * number2;
} else {
  result = number1 / number2; // use / (division) operator to divide two numbers
}

// display the result of the Calculator
window.alert("Result is: " + result);
