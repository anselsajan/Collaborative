import random

def play_game():
    # 1. Set up the range and generate a secret number
    lower_bound = 1
    upper_bound = 100
    secret_number = random.randint(lower_bound, upper_bound)
    attempts = 0
    
    print(f"Welcome to the Number Guessing Game!")
    print(f"I have selected a number between {lower_bound} and {upper_bound}.")

    while True:
        try:
            # 2. Get user input
            guess = int(input("Enter your guess: "))
            attempts += 1

            # 3. Provide feedback and check for win condition
            if guess == secret_number:
                print(f"Congratulations! You guessed the secret number {secret_number} in {attempts} attempts.")
                break
            elif guess < secret_number:
                print("Too low! Try again.")
            else:
                print("Too high! Try again.")
        
        except ValueError:
            # Handle invalid input (e.g., non-integer input)
            print("Invalid input. Please enter a valid integer.")

if __name__ == "__main__":
    play_game()
