console.clear();

Splitting();

var clock = document.querySelector('.clock');

/* We need zero-led values to help with the tens columns, and to allow for better looping around when reaching '9' */
function leadingZeroString(n) {
  return ("0" + n).slice(-2);
}
 var ms1 = document.getElementById("mil_1");

var millis = 0;
var seconds = 0;
var minutes = 0;

function add() {
  millis++;
  
  if (millis >= 10) {
      millis = 0;
      seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
      }
    }
  }

  
  var m = leadingZeroString(minutes);
  var s = leadingZeroString(seconds);
  var ms = leadingZeroString(millis);
 

  clock.style.setProperty("--m1", m[0]);
  clock.style.setProperty("--m2", m);
  clock.style.setProperty("--s1", s[0]);
  clock.style.setProperty("--s2", s); 
  ms1.innerHTML  = ms;


   
}


add();
setInterval(add, 100);