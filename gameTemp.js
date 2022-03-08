// getWinner();

function playRound(playSelection, computerSelection) {
    playchoice = playSelection.toString();
    console.log("Player: "+playchoice);
    compchoice = computerSelection.toString();
    console.log("Computer: "+compchoice);

    if (playchoice === compchoice) return "tie";
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
let counter = 0;
    let playcnt = 0;
    let compcnt = 0;
// console.log(computerSelection);
function getWinner(userChoice)
{
    
    const playSelection = userChoice
        console.log(playSelection);
        const computerSelection = computerPlay();
        const winner = playRound(playSelection, computerSelection);
    console.log("Winner is: " + winner);
    document.getElementById("player").innerHTML ="Player Choice: "+ playSelection
    document.getElementById("computer").innerHTML="Computer choice: "+computerSelection
    counter++;
    if (winner === "Player")
        playcnt++;
    if (winner === "Computer")
        compcnt++;
    document.getElementById("playcnt").innerHTML = "Player Score: " + playcnt
    document.getElementById("winner").innerHTML="Result: "+winner
    document.getElementById("compcnt").innerHTML="Computer Score: "+compcnt
    
    
    if (counter === 5)
    {
        let play = confirm("Want to play again??")
        if (play)
            location.reload();
        else
        {
            alert("Thanks for playing!")
            location.reload();

        }
    }
}