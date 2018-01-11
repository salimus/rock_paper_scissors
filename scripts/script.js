
function computerPlay() {
	let choice = ["rock", "paper", "scissors"];
	return choice[Math.floor(Math.random() * choice.length)];
}

function userPlay() {
    let answer = prompt('Rock, Paper, Scissors?');
    answer = answer.toLowerCase();
    while (!(answer == 'rock' || answer == 'paper' || answer == 'scissors')) {
        answer = prompt('Please type either rock, paper, or scissors');
        answer = answer.toLowerCase();
    } 
    return answer;
}

function playRound(playerSelection, computerSelection) {

	if (playerSelection == "rock") {
		if (computerSelection == "scissors") {
			return "Wins";
		} else if (computerSelection == "paper") {
			return "Loses";
		} else {
			return "Tie";
		}
	}

	if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			return "Wins";
		} else if (computerSelection == "scissors") {
			return "Loses";
		} else {
			return "Tie";
		}
	}

	if (playerSelection == "scissors") {
		if (computerSelection == "paper") {
			return "Wins";
		} else if (computerSelection == "rock") {
			return "Loses";
		} else {
			return "Tie";
		}
	}
}


// const playerSelection = "rock"
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))

function game() {
	const games = 5;
	let playerWins = 0;
	let computerWins = 0;

	for (let i = 0; i < games; i++){
		const playerSelection = userPlay();
		const computerSelection = computerPlay();

		let round = playRound(playerSelection, computerSelection);

		if (round == "Wins") {
			console.log("You won this round, " + playerSelection + " beats " + computerSelection + ".");
			playerWins++;
		} else if (round == "Loses") {
			console.log("You lost this round, " + playerSelection + " loses to " + computerSelection + ".");
			computerWins++;
		} else {
			console.log("You tied, " + playerSelection + " ties with " + computerSelection + ".");
		}
	}

	if (playerWins > computerWins) {
		console.log("Congratulations! You beat the computer " + playerWins + " to " + computerWins + "!");
	} else if (playerWins < computerWins) {
		console.log("Ouch! You lost to the computer " + playerWins + " to " + computerWins + "!");
	} else {
		console.log("This round is tied. You both got " + playerWins + " each.");
	}
}






























