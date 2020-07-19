function updateTimer() {
    future  = new Date("July 03, 2014 15:12:00").getTime();
    now     = new Date().getTime();
    diff    =  now - future;

    function zeroPadding(num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  var  years = Math.floor(diff / 31536000000);
  var  days  = Math.floor( diff / (1000*60*60*24) );
  var  months = Math.floor((days / 30));
    
  var  hours = Math.floor( diff / (1000*60*60) );
  var  mins  = Math.floor( diff / (1000*60) );
  var  secs  = Math.floor( diff / 1000 );

    y = zeroPadding((years),2)
    mo = zeroPadding(((months - years * 12)-1),2);
    d = zeroPadding((days - months *30),2);
    h = zeroPadding((hours - days  * 24),2);
    m = zeroPadding((mins  - hours * 60),2);
    s = zeroPadding((secs  - mins  * 60),2);
  
    document.getElementById("timer")
      .innerHTML =
      '<div>' + y + '<span>Years</span></div>' +
      '<div>' + mo + '<span>Months</span></div>' +
        '<div>' + d + '<span>Days</span></div>' +
        '<div>' + h + '<span>Hours</span></div>' +
        '<div>' + m + '<span>Minutes</span></div>' +
        '<div id="seconds">' + s + '<span>Seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );