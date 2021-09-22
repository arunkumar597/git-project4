// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();   
     hourTime.innerHTML =    `${addZero((hr % 12) || 12)}`
     minTime.innerHTML  =    `${addZero(min)}`
     secTime.innerHTML  =    `${addZero(sec)}`
     aMpM.innerHTML     =    `${hr >= 12 ? 'PM' : 'AM'}`
}
setInterval(time, 1000);
// clock section end

