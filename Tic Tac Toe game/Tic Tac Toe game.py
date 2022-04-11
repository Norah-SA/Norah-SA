#!/usr/bin/env python
# coding: utf-8

# In[1]:


from IPython.display import clear_output

# function will display the tic tac toc bored
def display_board(board): 
    clear_output()
    print('  '  + board[7] + '  |  ' + board[8] + '  |  ' + board[9])
    print('-----|-----|-----')
    print('  '  + board[4] + '  |  ' + board[5] + '  |  ' + board[6])
    print('-----|-----|-----')
    print('  '  + board[1] + '  |  ' + board[2] + '  |  ' + board[3])


# In[2]:


def play():
    playerChoice = ' '
    
    while not (playerChoice == 'X' or playerChoice == 'O'):
        playerChoice = input('Player1: Choose X or O:').upper()
        
    if playerChoice == 'X':
        
        return ('X','O')
    else:
        return ('O', 'X')
        


# In[3]:


# function will place player input X or O in the board

def choosePlace(board,playerChoice, position):
    
    board[position] = playerChoice


# In[4]:


#function win 

def winner(board,playerChoice):
    return ((board[7] == playerChoice and board[8] == playerChoice and board[9] == playerChoice) or 
    (board[4] == playerChoice and board[5] == playerChoice and board[6] == playerChoice) or 
    (board[1] == playerChoice and board[2] == playerChoice and board[3] == playerChoice) or 
    (board[7] == playerChoice and board[4] == playerChoice and board[1] == playerChoice) or 
    (board[8] == playerChoice and board[5] == playerChoice and board[2] == playerChoice) or 
    (board[9] == playerChoice and board[6] == playerChoice and board[3] == playerChoice) or 
    (board[7] == playerChoice and board[5] == playerChoice and board[3] == playerChoice) or 
    (board[9] == playerChoice and board[5] == playerChoice and board[1] == playerChoice)) 


# In[5]:


#decide which player goes first
import random
def chooseFirst():
    if random.randint(0, 1) == 0:  
        return 'Player 2'
    else:
        return 'Player 1'


# In[6]:


# check if  the space in the board is available
def checkPlace(board, position):
    return board[position] == ' '


# In[7]:


# check if  the space in the board is full
def fullBoard(board):
    for i in range(1,10):
        if checkPlace(board,i):
            return False
    return True


# In[8]:


# ask the player for next position 
def player_choice(board):
    position = 0
    
    while position not in [1,2,3,4,5,6,7,8,9] or not checkPlace(board,position):
        position = int(input('Choose your next position: (1-9): '))
         
    return position
    


# In[9]:


# play again 

def replay():
    return input('Do you want to play again? Enter Yes or No: ').lower().startswith('y')


# In[ ]:


print('----------| Welcome to Tic Tac Toe! |----------')

while True:
    board = [' ']*10
    
    player1,player2 = play()
    turn = chooseFirst()
    print(turn + ' will go first.')
    
    play = input('Are you ready to play? Enter Yes or No.')
    
    if play.lower()[0] == 'y':
        game_on = True
    else:
        game_on = False
        
    while game_on:
        if turn == 'Player 1':
            
            display_board(board)
            position = player_choice(board)
            choosePlace(board,player1,position)
            
            if winner(board,player1):
                display_board(board)
                print('Congratulations! You have won the game!')
                game_on = False
            else:
                if fullBoard(board):
                    display_board(board)
                    print('The game is a draw!')
                    break
                else:
                    turn = 'Player 2'
        else:
            
            display_board(board)
            position = player_choice(board)
            choosePlace(board, player2,position)

            if winner(board,player2):
                display_board(board)
                print('Player 2 has won!')
                game_on = False
            else:
                if fullBoard(board):
                    display_board(board)
                    print('The game is a draw!')
                    break
                else:
                    turn = 'Player 1'
                        
    if not replay():
        break


# In[ ]:




