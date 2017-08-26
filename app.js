$(document).ready(function() {
  var clicked = null;
  var isRunning = true;
  var interval;

  // countdown timer
    function startTimer(duration){
    var timer = duration;
    var minutes;
    var seconds;

    interval = setInterval(function(){
      if (isRunning) {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // replaces text with the countdown timer
        $("#countdown").text( minutes + ":" + seconds);

        if (--timer < 0){
          timer = 0
        }
      }
    }, 1000)
  }

  // increment and decrement break and session
  $(".btn").click(function(e){
    var initialNumberBreak = parseFloat($("#number-break").text());
    var initialNumberSession = parseFloat($("#number-session").text());
    var id = e.currentTarget.id;

    if (id === "subtract-break" && initialNumberBreak >= 2){
      initialNumberBreak--;
      clicked = null;
    }
    if (id === "add-break"){
      initialNumberBreak++;
      clicked = null;
    }
    $("#number-break").text(initialNumberBreak);

    if (id === "subtract-session" && initialNumberSession >= 2){
      initialNumberSession--;
      clicked = null;
    }
    if (id === "add-session"){
      initialNumberSession++;
      clicked = null;
    }
    // sets number incretments or decrements in session
    $("#number-session").text(initialNumberSession);

    // sets number increments or decrements in coundown timer
    $("#countdown").text(initialNumberSession + ":00");
  })

  // starts timer
  $("#circle").click(function(e){
    // gets value from #countdown
    var currentNumber = parseFloat($("#countdown").text().slice(0, -3)) * 60;
    var breakNumber = parseFloat($("#number-break").text())
    console.log('breakNumber: ', breakNumber);
    if (clicked === null){
      isRunning = true;
      clearInterval(interval);
      startTimer(currentNumber);
      clicked = true
    } else if (clicked) {
      isRunning = false;
      clicked = false;
    } else {
      isRunning = true;
      clicked = true;
    }
  })
});