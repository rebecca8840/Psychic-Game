// variables

var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = [];


var computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];

console.log(computerGuess);


function Guesschange() {    
    computerGuess; 
    console.log(computerGuess);
}



// Game portion

    //var userGuess = prompt("Guess which letter I'm thinking of.").toLowerCase();

    document.onkeypress = function(event) {


    guessesSoFar.push(userGuess);

    var userGuess = event.key;

    console.log(userGuess);


    //for (var i = 0; i < computerLetters.length; i++){

    
    if (userGuess === computerGuess) {
                alert("Correct!");
                wins ++;
                guessesSoFar.length = 0;
                Guesschange();
                
    }


    else if (guessesLeft === 0) {
            alert("You are out of guesses. Try again!");
            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;
            Guesschange();

    }

    else if (userGuess !== computerGuess) {
       alert("Try again!");
        guessesLeft--;
        Guesschange();
   }
};



    var html = "<h1>The Psychic Game</h1>" + 

    "<p>Guess which letter I'm thinking of.</p>" + 

    "<p> Wins: " +  wins + "</p>" + 

    "<p> Losses: " + losses + "</p>" +

    "<p>Guesses left: " + guessesLeft + "</p>" +

    "<p>Your Guesses so far: " + guessesSoFar + "</p>";
    