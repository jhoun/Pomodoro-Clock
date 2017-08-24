$(document).ready(function() {
  var clicked = null;
  var isRunning = true;
  var add;
  //when button is pressed
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

    $("#number-session").text(initialNumberSession);
    $("#countdown").text(initialNumberSession + ":00");
  })

    // countdown timer
    function startTimer(duration){
    var timer = duration;
    var minutes;
    var seconds;

    add = setInterval(function(){
      if (isRunning) {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#countdown").text( minutes + ":" + seconds);

        if (--timer < 0){
          timer = 0
        }
      }
    }, 1000)
  }

  $("#circle").click(function(e){

    var currentNumber = parseFloat($("#countdown").text().slice(0, -3)) * 60;
    if (clicked === null){
      isRunning = true;
      clearInterval(add);
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