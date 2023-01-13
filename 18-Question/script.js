// ? Write a program which tells the number od days in a month, now consider leap year.

function getDaysOfMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(getDaysOfMonth(2, 2024));
