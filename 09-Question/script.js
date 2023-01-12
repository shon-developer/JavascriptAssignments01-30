// ? Boolean value is either true or false
// todo - write three javascript statement example which provide truthy value.
// todo - write three javascript statement example which provide falsy value.

//* False, 0, -0, null, undefined, NAN, and empty-strings ("") are considered falsy values
//! false
// eg: 1;

if ("") {
  console.log(true);
} else {
  console.log(false);
}

//eg: 2

if (0) {
  console.log(true);
} else {
  console.log(false);
}

//eg: 3;

if (null) {
  console.log(true);
} else {
  console.log(false);
}

//! Truthy
// eg: 1;

if (10) {
  console.log(true);
} else {
  console.log(false);
}

//eg: 2

if ("Shon") {
  console.log(true);
} else {
  console.log(false);
}

//eg: 3;

if (true) {
  console.log(true);
} else {
  console.log(false);
}
