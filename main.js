/* Main.js */

var visitTime = new Date();

var nowTime = new Date();

var seconds = 0;

function updateTime () {
  nowTime = new Date();
  seconds = Math.floor(( nowTime.getTime() - visitTime.getTime() ) / 1000);
  if (seconds < 60) {
    document.getElementById('print').innerHTML = "You have been here since the last " + seconds + " seconds.";
  }
  else {
    document.getElementById('print').innerHTML = "You have been here since the last " + Math.floor(seconds/60) + " minutes and " + seconds % 60 + " seconds.";
  }
}

setInterval(
  updateTime,
  1000
)
