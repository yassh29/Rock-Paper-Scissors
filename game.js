
function playRound(playSelection, computerSelection) {
    playchoice = playSelection.toString();
    console.log("Player: "+playchoice);
    compchoice = computerSelection.toString();
    console.log("Computer: "+compchoice);

    if (playchoice === compchoice) return null;
    else if (playchoice === "rock" && compchoice === "scissors") return "Player";
    else if (playchoice === "scissors" && compchoice === "paper") return "Player";
    else if (playchoice === "paper" && compchoice === "rock") return "Player";
    else if (playchoice === "scissors" && compchoice === "rock") return "Computer";
    else if (playchoice === "paper" && compchoice === "scissors") return "Computer";
    else if (playchoice === "rock" && compchoice === "paper") return "Computer";
}

function humanPlay() {
    let choice = prompt("Please enter your choice");
    return choice;
}

function computerPlay() {
    let randomChoice = (Math.floor(Math.random() * 3))
    if (randomChoice === 0)
        return "rock"
    else if (randomChoice === 1)
        return "paper"
    else if (randomChoice === 2)
        return "scissors"
}

// console.log(computerSelection);
getWinner();
function getWinner()
{
    for (var i = 1; i <= 5; i++)
    {
        const playSelection = humanPlay();
        const computerSelection = computerPlay();
        const winner = playRound(playSelection, computerSelection);
        console.log("Winner is: "+winner);
        i++;
    }

}