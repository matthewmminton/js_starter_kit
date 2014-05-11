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
  // if guess is too high, let them know the guess is too high
  // if guess is too low, let them know the guess is too low
  // if guess is accurate, let them know they guessed the number and how many guesses it took
  // if guess is invalid, provide invalid input message
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
  count = 0;
  $("#count span").html(count);
});





