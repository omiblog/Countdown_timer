const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 9, 31, 21, 57, 0);

const year = futureDate.getFullYear(); 
const hours = futureDate.getHours();
const minuts = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minuts}pm`;
// futere time in ms

const futreTime = futureDate.getTime();
console.log(futreTime);

function getRemiiningTime(){

  const today = new Date().getTime();

  console.log(today);

}
getRemiiningTime();