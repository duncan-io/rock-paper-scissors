

//Get player choice
function playerSelection(){
    let playerChoice = prompt("Rock, paper, or scissors?");
    first = playerChoice.slice(0,1);
    rest = playerChoice.substring(1);
    choice = first.toUpperCase() + rest.toLowerCase()
    return choice
}


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

function playRps () {
   
    player = playerSelection();
    computer = getComputerChoice();
    console.log("You went with " + player);
    console.log("The computer decided on " + computer);

    switch (true) {
        case (player === computer):
            return ("It's a tie!")
            break;
        case (player == "Rock" && computer == "Paper"):
            return ("You lose!")
            break;
        case (player == "Rock" && computer == "Scissors"):
            return ("You win!")
            break;
        case (player == "Paper" && computer == "Rock"):
            return ("You win!")
            break;
        case (player == "Paper" && computer == "Scissors"):
            return ("You lose!")
            break;
        case (player == "Scissors" && computer == "Rock"):
            return ("You lose!")
            break;
        case (player == "Scissors" && computer == "Paper"):
            return  ("You win!")
            break;
        default:
            return ("Someting went wrong and you probably lost")
    }
}


for (let i = 0; i < 5; i++){

    function game(){
        let result = playRps();
        console.log (result)
     }

     game();

}



