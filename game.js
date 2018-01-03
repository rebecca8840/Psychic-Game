// variables

var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
					"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = [];



// Game portion

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess = computerLetters[Math.floor(Math.random()*computerLetters.length)];

	guessesSoFar.push(userGuess);



	if (userGuess == computerGuess) {

				wins ++;
				guessesLeft = 9;
				guessesSoFar.length = 0;
	}


	else if (guessesLeft == 0) {

			losses++;
			guessesLeft = 9;
			guessesSoFar.length = 0;
	}

 	else if (userGuess !== computerGuess) {

 			guessesLeft--;
 	}

}