function getPlayerSelection() {
  const playerSelection = prompt('Choose your weapon')
  return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice()
  playerSelection = getPlayerSelection()
  if (computerSelection === playerSelection) {
    console.log('Tie')
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    console.log('You win! Rock beats Scissors!')
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    console.log('You win! Paper beats Rock!')
  }else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    console.log('You win! Scissors beats Rock!')
  }else {
    console.log('You loose')
  }
}


for (let i = 0; i < 5; i++) {
  function getComputerChoice() {
    const choises = ["Rock", "Paper", "Scissors"]
    const choise = Math.floor(Math.random() * choises.length)
    return (choises[choise])
  }
  playRound()
}
