## Rock, Paper, Scissors, Lizard, Spock game web application.
Default Rock, Paper, Scissors game is a great way to take decisions based on luck, but it commonly ends in a draw match. Based on that situation, *"Rock, Paper, Scissors, Lizard, Spock"* adds two new move options, lowering the chances of a draw outcome.

This is the project of an web application that runs an interface for the game Rock, Paper, Scissors, Lizard, Spock and connects to an endpoint to return the match results, according to the game rules developed by Sam Kass.

!["Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."](https://rpsls.rocks/assets/img/rpsls/rock-paper-scissors-lizard-spock-rules.jpg)

## Requirements

 - nodeJS version 14
 - Visual Studio Code;

## Installation

 - Open Visual Studio
 - Run terminal in pptls-angular-frontend:
	>npm install -g @angular/cli
	
 -  Run
	 >ng serve --open
	 
 - Web application is hosted on http://localhost:4200
## Usage
 - The players must select a move, and the result is going to appear in sequence;
	### Heading
	The game result depends on a POST request, like https://github.com/leolozz/pptls-api
