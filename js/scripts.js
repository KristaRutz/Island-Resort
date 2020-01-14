$(document).ready(function() {
  $(".clickToToggleText").click(function() {
    $("#toggleText").toggle();
  });

  $(".clickToToggleImg").click(function() {
    $("#toggleImg").fadeToggle();
    //$("#toggleImg").fadeOut();
  });

  
  //for (var i = 1; i <= 9; i++){} 

    $("#surfText").click(function(){
      $("#surfImage").toggle();
    });

    $("#barText").click(function(){
      $("#barImage").toggle();
    });

    $("#swimText").click(function(){
      $("#swimImage").toggle();
    });

    $("#nudismText").click(function(){
      $("#nudismImage").toggle();
    });

    $("#shootingRangeText").click(function(){
      $("#shootingRangeImage").toggle();
    });
    $("#conquistadorText").click(function(){
      $("#conquistadorImage").toggle();
    });

    $("#danceText").click(function(){
      $("#danceImage").toggle();
    });

    $("#exoticText").click(function(){
      $("#exoticImage").toggle();
    });

    $("#movieText").click(function(){
      $("#movieImage").toggle();
    });
});
