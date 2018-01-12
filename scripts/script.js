let computerScore = 0;
let humanScore = 0;
const h4 = document.querySelector("h4");
const h2 = document.querySelector("h2");

function reset() {
	const content = document.querySelector("p");
	humanScore = 0;
	computerScore = 0;
	h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	content.textContent = "";
	h2.textContent = "";
}

function buttonReset() {
	document.querySelector("#reset").addEventListener("click", reset);
}

function computerPlay() {
	let choice = ["rock", "paper", "scissors"];
	return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
	const content = document.querySelector("p");

	if (computerScore == 5) {
		return;
	} else if (humanScore == 5) {
		return;
	} else if (playerSelection == computerSelection) {
		content.textContent = "Tie";
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		content.textContent = "You win, rock beats scissors!";
		humanScore += 1;
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		content.textContent = "You win, paper beats rock!";
		humanScore += 1;
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		content.textContent = "You win, scissors beats paper!";
		humanScore += 1;
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	} else {
		content.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
		computerScore += 1;
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	}

	if (computerScore == 5) {
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
		h2.textContent = "Computer wins!";
	} else if (humanScore == 5) {
		h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
		h2.textContent = "You win!";
	}
}


// const playerSelection = "rock"
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))

function game() {
	document.getElementById('start').id = 'start';
	h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
	const buttons = document.querySelectorAll(".button");
	// button.forEach( function(button) { 
	buttons.forEach((button) => {
		// button.addEventListener("click", function {
		button.addEventListener("click", () => {
			playRound(button.id, computerPlay())
		});
	});
}

function startGame() {
	document.querySelector("#start").addEventListener("click", game);
}

buttonReset()
startGame()




























