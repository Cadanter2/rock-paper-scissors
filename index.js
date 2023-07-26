/*
Pseudo Code

Game
    Get input from user - userSelection = prompt("rock", "paper", "scissors")
    Get random selection from computer - computerSelection(random)
    Check for "rock" < "paper" < "scissors" < "rock"
    Check for draw then skip
    Increase userScore or computerScore whoever wins
Play game 5 times
print results
*/

// Get random selection from computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

// Get user selection
function getUserChoice() {
    let choice = ""
    while (choice == "") {
        choice = prompt("Make your choice", `r/rock, p/paper, s/scissors`)
        // Convert to lower case
        choice = choice.toLowerCase()
        // Return accepted values
        if (choice == "r" || choice == "rock") {
            return choice = "rock"
        } else if (choice == "p" || choice == "paper") {
            return choice = "paper"
        } else if (choice == "s" || choice == "scissors") {
            return choice = "scissors"
        } else {console.log("You entered a wrong choice, try again.")
            choice = ""
        }
    }
}

// Main function to play the game
function game() {
    let gameNum = 1
    let userScore = 0
    let computerScore = 0
    // Iterate through 5 times
    while (gameNum < 6) {
        const userSelection = getUserChoice()
        const computerSelection = getComputerChoice()
        console.log(`${userSelection} vs ${computerSelection}`)
        // Determine who wins
        if (userSelection == computerSelection) {
            console.log("It's a draw. Try again")
            continue
            } else if (userSelection == "rock" && computerSelection == "scissors") {
                console.log(`Game number ${gameNum}: You win! ${userSelection} beats ${computerSelection}`)
                userScore++
                gameNum++
                } else if (userSelection == "scissors" && computerSelection == "paper") {
                    console.log(`Game number ${gameNum}: You win! ${userSelection} beats ${computerSelection}`)
                    userScore++
                    gameNum++
                    } else if (userSelection == "paper" && computerSelection == "rock") {
                        console.log(`Game number ${gameNum}: You win! ${userSelection} beats ${computerSelection}`)
                        userScore++
                        gameNum++
        } else {
            console.log(`Game number ${gameNum}: You lose! ${computerSelection} beats ${userSelection}`)
            computerScore++
            gameNum++
            }
    }
    // Display results
    console.log(`Final score: User - ${userScore} vs Computer - ${computerScore}`)
    if (userScore > computerScore) {
        console.log("YOU WIN!!!")
    } else {console.log("YOU LOSE!!!")}
}

game()