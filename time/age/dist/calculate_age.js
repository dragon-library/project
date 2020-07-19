    // Set the date we're counting down to
    
    var birth_day = "July 03, 2014 15:12:00";
    var BirthDate = new Date(birth_day).getTime();
    document.getElementById("tittle").innerHTML = "Phacharaphon Wongsanga";

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = now - BirthDate;

      function zeroPadding(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }

      // Time calculations for days, hours, minutes and seconds
      var y = Math.floor(distance / 31536000000);
      
      var d = Math.floor((distance % 31536000000) / 86400000);
      var m = Math.floor(d / 30);

        d = d % 30;
      var h =  zeroPadding(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),2);
      var mi = zeroPadding(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),2);
      var s = zeroPadding(Math.floor((distance % (1000 * 60)) / 1000),2);

      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML = days + " วัน " + hours + " ชั่วโมง "
      //   + minutes + " นาที " + seconds + " วินาที ";

      document.getElementById("timer")
    .innerHTML =
   
    '<div>' + y + '<span>Years</span></div>' +
      '<div>' + m + '<span>Months</span></div>' +
      '<div>' + d + '<span>Days</span></div>' +
      '<div>' + h + '<span>Hours</span></div>' +
      '<div>' + mi + '<span>Minutes</span></div>' +
      '<div>' + s + '<span>Seconds</span></div>' ;

   


    }
    

      
     

      // If the count down is over, write some text 
     
      setInterval( 1000 );