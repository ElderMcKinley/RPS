#!/bin/python


print("Player 1 enter rock, paper, or scissors")
player1_choice = input()
print("---------------------------------------")
print("Player 2 enter rock, paper, or scissors")
player2_choice = input()


def evaluation(p1, p2):
    if p1 == "rock" and p2 == "scissors":
        return("Player 1 Wins!")
    elif p2 == "rock" and p1 == "scissors":
        return("Player 2 Wins!")
    elif p1 == "rock" and p2 == "paper":
        return("Player 2 Wins!")
    elif p2 == "rock" and p1 == "paper":
        return("Player 1 Wins!")
    elif p1 == "scissors" and p2 == "paper":
        return("Player 1 Wins!")
    elif p2 == "scissors" and p1 == "paper":
        return("Player 2 Wins!")
    elif p1 == p2:
        return("It's a draw!")

print(evaluation(player1_choice, player2_choice))