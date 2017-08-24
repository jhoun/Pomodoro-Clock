$(document).ready(function() {
  var clicked = null;
  var isRunning = true;
  //when button is pressed
  $(".btn").click(function(e){
    var initialNumberBreak = parseFloat($("#number-break").text());
    var initialNumberSession = parseFloat($("#number-session").text());
    var id = e.currentTarget.id;

    if (id === "subtract-break" && initialNumberBreak >= 2){
      initialNumberBreak--;
    }
    if (id === "add-break"){
      initialNumberBreak++;
    }
    $("#number-break").text(initialNumberBreak);

    if (id === "subtract-session" && initialNumberSession >= 2){
      initialNumberSession--;
    }
    if (id === "add-session"){
      initialNumberSession++;
    }

    $("#number-session").text(initialNumberSession);
    $("#countdown").text(initialNumberSession + ":00");
  })

    function startTimer(duration){
    var timer = duration;
    var minutes;
    var seconds;

    setInterval(function(){
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