import random

# Generate a random number between 1 and 10 (inclusive)
secret_number = random.randint(1, 10)
guess = None

print("Welcome to the Number Guessing Game!")
print("Try to guess the number between 1 and 10.")

# Loop until the user guesses the correct number
while guess != secret_number:
    # Get user input and convert it to an integer
    try:
        guess = int(input("Enter your guess: "))
    except ValueError:
        print("Invalid input. Please enter a valid number.")
        continue # Skips the rest of the loop and asks for input again

    # Provide feedback on the guess
    if guess == secret_number:
        print("Congratulations! You guessed correctly!")
    elif guess < secret_number:
        print("Too low! Try a higher number.")
    else:
        print("Too high! Try a lower number.")

print("Game over.")
