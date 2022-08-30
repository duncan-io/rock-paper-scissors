

// Get player choice (old version)
// function playerSelection(){
//     let playerChoice = prompt("Rock, paper, or scissors?");
//     first = playerChoice.slice(0,1);
//     rest = playerChoice.substring(1);
//     choice = first.toUpperCase() + rest.toLowerCase()
//     return choice
// }


//Get computer choice
function getComputerChoice (){
    let choice = Math.floor((Math.random()*3)+1);

    switch(choice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Something went wrong";
            break;
    }

}

//Collect choices, compare, return results

function playRps (playerChoice) {
   
    player = playerChoice;
    computer = getComputerChoice();
    console.log("The computer decided on " + computer);
    let outcome = [player, computer]

    switch (true) {
        case (player === computer):
            outcome.push("It's a tie!");
            return outcome;
            break;
        case (player == "Rock" && computer == "Paper"):
            outcome.push("You lose!");
            return outcome;
            break;
        case (player == "Rock" && computer == "Scissors"):
            outcome.push("You win!");
            return outcome;
            break;
        case (player == "Paper" && computer == "Rock"):
            outcome.push("You win!");
            return outcome;
            break;
        case (player == "Paper" && computer == "Scissors"):
            outcome.push("You lose!")
            return outcome;
            break;
        case (player == "Scissors" && computer == "Rock"):
            outcome.push("You lose!");
            return outcome;
            break;
        case (player == "Scissors" && computer == "Paper"):
            outcome.push("You win!");
            return outcome;
            break;
        default:
            return ("Someting went wrong and you probably lost")
    }
}

//Select Buttons and add click event listeners
const buttons = document.querySelectorAll('button');
let comScore = document.getElementById('comScore');
let manScore = document.getElementById('manScore');
let results = document.getElementById('results');
let comResults = document.getElementById('comResults');
let winAndLose = document.getElementById('winAndLose');
let humanScore = 0;
let machineScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        let outcome = playRps(playerChoice);

        results.textContent = "You went with " + outcome[0];
        comResults.textContent = "The Machine returned fire with " + outcome[1];
        winAndLose.textContent = outcome[2];

        if (outcome[2] == "You win!"){
            humanScore++
            manScore.textContent = humanScore;
        } else if (outcome[2] == "You lose!"){
            machineScore++;
            comScore.textContent = machineScore;
        }
        
    })
})




// Play 5 rounds code
// for (let i = 0; i < 5; i++){

//     function game(){
//         let result = playRps();
//         console.log (result)
//      }

//      game();

// }



