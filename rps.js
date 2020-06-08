
var player1 ={
    hand: "empty"
}
var player2 = {
    hand: "empty"
}
var cpu ={
    hand: "empty"
}
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function evaluation(p1, p2){
    var result = document.getElementById("result");
    // console.log("Evaluation started")
    if(p1.hand == "rock" && p2.hand == "scissors"){
        result.innerHTML = "Player 1 Wins!";
    }
    else if(p2.hand == "rock" && p1.hand == "scissors"){
        result.innerHTML = "Player 2 Wins!";
    }
    else if(p1.hand == "rock" && p2.hand == "paper"){
        result.innerHTML = "Player 2 Wins!";
    }
    else if(p2.hand == "rock" && p1.hand == "paper"){
        result.innerHTML = "Player 1 Wins!";
    }
    else if(p1.hand == "scissors" && p2.hand == "paper"){
        result.innerHTML = "Player 1 Wins!";
    }
    else if(p2.hand == "scissors" && p1.hand =="paper"){
        result.innerHTML = "Player 2 Wins!";
    }
    else if(p1.hand == p2.hand){
        result.innerHTML = "It's a draw!";
    }
}
function cpuChooseHand(cpu, choice){
    let roll = Math.floor(Math.random() * 101);
    if(roll < 34){
        cpu.hand = "rock"
    }
    if(roll > 33 && roll < 67){
        cpu.hand = "paper"
    }
    if(roll > 66 && roll <= 100){
        cpu.hand = "scissors"
    }
}
function chooseHand(player, choice){
    player.hand = choice;
    console.log(player);
}