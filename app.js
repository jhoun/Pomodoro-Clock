$(document).ready(function() {
  $(".btn").click(function(e){
    var initialNumber = parseInt($("#number-break").text());
    var id = e.currentTarget.id;
    if (id === "subtract-break" && initialNumber >= 2){
      initialNumber--;
    }
    if (id === "add-break"){
      initialNumber++;
    }
    $("#number-break").text(initialNumber);
  })
  function startTimer(duration){
    var timer = duration;
    var minutes;
    var seconds;
    setInterval(function(){
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      $("#countdown").text( minutes + ":" + seconds);

      if (--timer < 0){
        timer = 0
      }
    }, 1000)
  }


  startTimer(3)
});