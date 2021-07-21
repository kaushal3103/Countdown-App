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

const deadlineFormat = document.querySelectorAll('.deadline-format h4');

//let futureDate = new Date(2021,7,25,12,24);
let deadlineDate = window.prompt("Write the Deadline Date and Time in this format(DATE MONTH YEAR , HOURS : MINUTES \n PLEASE WRITE TIME IN 24 HOURS FORMAT");

futureDate = new Date(deadlineDate);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()]


let month = months[futureDate.getMonth()];

if ( mins < 10){
giveaway.innerHTML= ` giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hour}:0${mins}` ;
}else{
giveaway.innerHTML= ` giveaway ends on ${weekday}, ${date} ${month} ${year},${hour}:${mins}`
};

const futuretime = futureDate.getTime();
//console.log(futuretime);

function getRemainingTime(){

const today = new Date().getTime();

const t = futuretime - today ;

const oneday = 24*60*60*1000;
const onehour = 60*60*1000;
const onemin = 60*1000;

let days = Math.floor( t/oneday);
let hours = Math.floor((t%oneday)/onehour);
let mins =  Math.floor((t%onehour)/onemin);
let secs = Math.floor((t%onemin)/1000);



const values = [days,hours,mins,secs];

function format(item){
  if( item < 10){
    return item = `0${item}`;
  }
  return item;
}

deadlineFormat.forEach(function(item,index){
  item.innerHTML = format(values[index]);
});

if( t < 0){
clearInterval(countdown);
deadline.innerHTML =`<h3 class="expired">sorry, this giveaway has expired</h3>`;
}

}
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();