

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

  playerSelection();