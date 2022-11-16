function game() {
  function getPlayerSelection() {
    const playerSelection = prompt('Choose your weapon')
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  }

  function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = getPlayerSelection()
    if (computerSelection === playerSelection) {
      console.log(`You chose ${playerSelection}. Computer also chose ${computerSelection}. Tie game!`)
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
      console.log('Rock beats Scissors! You win!')
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
      console.log('Paper beats Rock! You win!')
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
      console.log('Scissors beats Paper! You win!')
    } else {
      console.log(`Computer chose ${computerSelection}. You chose ${playerSelection}. You loose!`)
    }
  }


  for (let i = 0; i < 5; i++) {
    function getComputerChoice() {
      const choises = ['Rock', 'Paper', 'Scissors']
      const choise = Math.floor(Math.random() * choises.length)
      return (choises[choise])
    }
    playRound()
  }
}

game()
