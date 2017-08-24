$(document).ready(function() {
  $(".btn").click(function(e){
    console.log('e: ', e);
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