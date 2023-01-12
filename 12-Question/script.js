// ? Create a human readable time format using the Date time object

//* yyyy-mm-dd hh:mm

let timeformat01 = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "" + month;
  }

  let hours = d.getHours();
  let minute = d.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  formattedTimeDate =
    [year, month + 1, date].join("-") + " " + [hours, minute].join(":");
  console.log(formattedTimeDate);
};

timeformat01();

//* dd-mm-yyyy hh:mm

let Timeformat02 = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "" + month;
  }

  let hours = d.getHours();
  let minutes = d.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let formattedTimeDate02 =
    [date, month + 1, year].join("-") + " " + [hours, minutes].join(":");
  console.log(formattedTimeDate02);
};

Timeformat02();

//* dd/mm/yyyy hh:mm

let timeFormat03 = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "" + month;
  }

  let hours = d.getHours();
  let minutes = d.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let formattedTimeDate03 =
    [date, month + 1, year].join("/") + " " + [hours, minutes].join(":");
  console.log(formattedTimeDate03);
};

timeFormat03();
