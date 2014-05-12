var MAX = 50;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand = getRandomInt(0, 50);
var count = 0;

// display range of valid guesses
alert("Enter a number between 0 and " + MAX);

// hit enter to submit guess
$("#enter").on("click", function(){
  //set the guess to the value variable
  value = $(".guess").val();
  //convert the value valuable to integer [note, for some reason not accepting radix parameter]
  value_int = parseInt(value);
  //alert user of guess
  $(".alert-box span").append(value + ", ");
  //clear out input
  //counting
  count = count + 1;
  $("#count span").html(count);
  // if guess is accurate, let them know they guessed the number and how many guesses it took
  if(value_int === rand) {
    $("#return span").html("Congratulations, you've guessed the number in " + count + " guesses!");
  } else if(value_int < rand && value_int >= 0) {
  // if guess is too low, let them know the guess is too low
    $("#return span").html(value + " was too low, try again!");
  // if guess is invalid, provide invalid input message
  } else if (value_int > 50 || value_int < 0 || !$.isNumeric(value_int)) {
    $("#return span").html("Invalid input, must enter a number between 0 and " + MAX);
  // if guess is too high, let them know the guess is too high
  } else {
    $("#return span").html(value + " was too high, try again!");
  }
  });

//bind "hitting enter" to clicking the button to submit guess.
$("#guess").keyup(function(event){
    if(event.keyCode == 13){
        $("#enter").click();
    }
});

// give user option to start again by clicking button
$("#restart").on("click", function(){
  rand = getRandomInt(0, 50);
  $(".alert-box span").html('');
  $("#return span").html('');
  count = 0;
  $("#count span").html(count);
});





