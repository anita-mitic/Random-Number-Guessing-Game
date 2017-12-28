var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
}  else if (randomNumber < parseInt(guess)) { 
    var guessLess = prompt('<p> Try a smaller number </p>');
  if (parseInt(guessLess) === randomNumber){
   correctGuess = true;
  }    
} else if (randomNumber > parseInt(guess)){
    var guessMore = prompt('<p> Try a bigger number </p>');
  if (parseInt(guessMore) === randomNumber){
   correctGuess = true;
  }    
} if ( correctGuess ) {
    document.write('<p>Well done!</p>')
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>')
}