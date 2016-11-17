// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    var array = ["rock","paper","scissors"];
    var randomNum = Math.round(Math.random()*2);
  return array[randomNum]
    
}
    
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").

    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.

    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum])

    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    if (userChoice = "rock"){
        if(computerChoice = "paper"){
           outcome = Computer wins!
        }
    else if (computerChoice = "rock"){
           outcome = Draw!
    }
    else if (computerChoice = "scissors"){
           outcome = User wins!
    }
     };
    if (userChoice = "paper"){
        if (computerChoice = "rock"){
            outcome = User wins!
        }
    else if (computerChoice ="Paper"){
            outcome = Draw
    }
    else if (computerChoice = "scissors"){
            outcome = Computer wins!
    }
     };
      if (userChoice = "scissors"){
        if (computerChoice = "rock"){
            outcome =  Computer wins!
        }
    else if (computerChoice ="Paper"){
            outcome = User wins!
    }
    else if (computerChoice = "scissors"){
            outcome = Draw!
    }
     };
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};

var handleUserClick = function(userChoice){
    var computerChoice = generateComputerChoice();
    var outcome = pickWinner(userChoice, computerChoice);
    
    // set the html element text for the computer choice and the outcome
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};
    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.

