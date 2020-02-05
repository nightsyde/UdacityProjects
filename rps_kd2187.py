#!/usr/bin/env python3
# Rock, Paper Scissors project code.
# Kirk Donaldson
# v1.3- added code to randomize computer player type 
# v1.2- updated to include CyclicPlayer
#

import random

"""This program plays a game of Rock, Paper, Scissors between two Players,
and reports both Player's scores each round."""

moves = ['rock', 'paper', 'scissors']

"""The Player class is the parent class for all of the Players
in this game"""


class Player:
    def move(self):
        return "rock"

    def learn(self, my_move, their_move):
        pass

    def validateMove(self, response):
        pass


class RandomPlayer(Player):
    def move(self):
        return random.choice(moves)


class HumanPlayer(Player):
    def move(self):
        index = 0
        while index == 0:
            response = input("Choose your move- rock, paper, or scissors: ")
            if response in moves:
                index = 1
            else:
                print(f"{response} is not a valid move. Please try again.\n")
        return response


class ReflectPlayer(Player):
    def __init__(self):
        self.lastmove = random.choice(moves)

    def learn(self, my_move, their_move):
        self.lastmove = their_move

    def move(self):
        return self.lastmove


class CyclicPlayer(Player):
    def __init__(self):
        self.index = random.randint(0, 3)

    def move(self):
        self.index += 1
        return moves[self.index % 3]


def beats(one, two):
    return ((one == 'rock' and two == 'scissors') or
            (one == 'scissors' and two == 'paper') or
            (one == 'paper' and two == 'rock'))


def whoWon(score1, score2):
    # print(isinstance(score2, int))
    print(f"{score1} to {score2}\n")
    if score1 == score2:
        print("It's a DRAW!!!")
    elif score1 < score2:
        print("Player 2 Wins!!!")
    else:
        print("Player 1 Wins!!!")


def SelectPlayer(typeOfPlayer):
    # selects type of computer player
    # self.typeOfPlayer = random.randint(0, 3)
    if typeOfPlayer == 0:
        return Player()
    elif typeOfPlayer == 1:
        return RandomPlayer()
    elif typeOfPlayer == 2:
        return ReflectPlayer()
    elif typeOfPlayer == 3:
        return CyclicPlayer()


class Game:
    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2
        self.p1Score = 0
        self.p2Score = 0

    def play_round(self):
        move1 = self.p1.move()
        self.p1.validateMove(move1)
        move2 = self.p2.move()
        print(f"Player 1: {move1}  Player 2: {move2}")
        if (move1 == move2):
            print("It's a DRAW! No score!")
            print(f"Score is {self.p1Score} to {self.p2Score}\n")
        elif (beats(move1, move2)):
            print("Player 1 WINS")
            self.p1Score += 1
            print(f"Score is {self.p1Score} to {self.p2Score}\n")
        else:
            print("Player 2 WINS")
            self.p2Score += 1
            print(f"Score is {self.p1Score} to {self.p2Score}\n")
        self.p1.learn(move1, move2)
        self.p2.learn(move2, move1)

    def play_game(self):
        self.howMany = int(input("How many rounds do you want to play? "))
        print("Game start!")
        for round in range(self.howMany):
            print(f"Round {round+1}:")
            self.play_round()
        whoWon(self.p1Score, self.p2Score)
        print("Game over!")


if __name__ == '__main__':

    game = Game(HumanPlayer(), SelectPlayer(random.randint(0, 3)))
    game.play_game()
