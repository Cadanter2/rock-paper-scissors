function playRound(playerSelection, computerSelection) {
    return `${playerSelection} vs ${computerSelection}`
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));