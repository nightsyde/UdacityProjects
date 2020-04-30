#!/usr/bin/env python3
# Rock, Paper Scissors project code.
# Kirk Donaldson
# v2.0- added "lizard" and "vulcan" just for fun
# v1.31 added comments. added ".lower()" to HumanPlayer input
# v1.3- added code to randomize computer player type
# v1.2- updated to include CyclicPlayer
#

import random

"""This program plays a game of Rock, Paper, Scissors between two Players,
and reports both Player's scores each round."""

moves = ['rock', 'paper', 'scissors', 'lizard', 'vulcan']

"""The Player class is the parent class for all of the Players
in this game"""


class Player:
    # default computer player type: always chooses "rock"
    def move(self):
        return "rock"

    def learn(self, my_move, their_move):
        pass

    def validateMove(self, response):
        pass


class RandomPlayer(Player):
    # computer player type makes random choice of selection in moves
    def move(self):
        return random.choice(moves)


class HumanPlayer(Player):
    # human player. includes error check for valid move response.
    def move(self):
        index = 0
        while index == 0:
            response = input("Choose your move- rock, paper, scissors, lizard, or vulcan: ").lower()
            if response in moves:
                index = 1
            else:
                print(f"{response} is not a valid move. Please try again.\n")
        return response


class ReflectPlayer(Player):
    # computer player that makes random first move, then chooses opponent's
    # ... previous move.
    def __init__(self):
        self.lastmove = random.choice(moves)

    def learn(self, my_move, their_move):
        self.lastmove = their_move

    def move(self):
        return self.lastmove


class CyclicPlayer(Player):
    # computer player that makes random first move, then selects next move in
    # ... list
    def __init__(self):
        self.index = random.randint(0, 5)

    def move(self):
        self.index += 1
        return moves[self.index % 5]


def beats(one, two):
    # determine order of precidence.
    return ((one == 'vulcan' and two == 'scissors') or
            (one == 'scissors' and two == 'paper') or
            (one == 'paper' and two == 'rock') or
            (one == 'rock' and two == 'lizard') or
            (one == 'lizard' and two == 'vulcan') or
            (one == 'vulcan' and two == 'rock') or
            (one == 'lizard' and two == 'paper') or
            (one == 'rock' and two == 'scissors') or
            (one == 'paper' and two == 'vulcan') or
            (one == 'scissors' and two == 'lizard'))


def whoWon(score1, score2):
    # determine with player wins at the end of game.
    print(f"{score1} to {score2}\n")
    if score1 == score2:
        print("It's a DRAW!!!")
    elif score1 < score2:
        print("Player 2 Wins!!!")
    else:
        print("Player 1 Wins!!!")


def SelectPlayer(typeOfPlayer):
    # selects type of computer player
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
        self.p1.learn(move1, move2)  # for ReflectPlayer type
        self.p2.learn(move2, move1)  # for ReflectPlayer type

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
