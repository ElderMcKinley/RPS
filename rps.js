console.log("Player 1 enter rock, paper, or scissors");
var player1_choice = window.prompt("Player 1 Choice: ");
console.log("Player 2 enter rock, paper, or scissors");
var player2_choice = window.prompt("Player 2 Choice: ");

function evaluation(p1, p2){
    if(p1 == "rock" && p2 == "scissors"){
        console.log("Player 1 Wins!");
    }
    else if(p2 == "rock" && p1 == "scissors"){
        console.log("Player 2 Wins!");
    }
    else if(p1 == "rock" && p2 == "paper"){
        console.log("Player 2 Wins!");
    }
    else if(p2 == "rock" && p1 == "paper"){
        console.log("Player 1 Wins!");
    }
    else if(p1 == "scissors" && p2 == "paper"){
        console.log("Player 1 Wins!");
    }
    else if(p2 == "scissors" && p1 =="paper"){
        console.log("Player 2 Wins!");
    }
    else if(p1 == p2){
        console.log("It's a draw!");
    }
}
evaluation(player1_choice, player2_choice);