$(document).ready(function () {


  $("#info-btn").click(function(){
    console.log("clicked")

    window.location.href = "/info";
  })

  $(".start-btn").click(function(){
    console.log("clicked")

    var userInput = prompt("Please enter the game password to continue!")

    if (userInput == "123") {
      console.log("correct PW")
      window.location.href = "/start";

    } else {
      console.log("wrong PW")
    }

  })

});
