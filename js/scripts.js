$(document).ready(function() {
  $(".clickToToggleText").click(function() {
    $("#toggleText").toggle();
  });

  $(".clickToToggleImg").click(function() {
    $("#toggleImg").fadeToggle();
    //$("#toggleImg").fadeOut();
  });
});