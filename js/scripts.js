$(document).ready(function() {
  $(".fade-header").hide().fadeIn(1000);

  $(".clickable1").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#walrus-showing2").slideToggle();
    $("#walrus-hidden2").slideToggle();
  });

  $(".about-click").click(function() {
    $("#show-about").slideToggle();
    $("#hide-about").slideToggle();
  });



});
