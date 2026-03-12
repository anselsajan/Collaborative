# Define a function to add two numbers
def add(x, y):
    return x + y

# Define a function to subtract two numbers
def subtract(x, y):
    return x - y

# Define a function to multiply two numbers
def multiply(x, y):
    return x * y

# Define a function to divide two numbers
def divide(x, y):
    if y == 0:
        return "Error: Division by zero is not allowed"
    else:
        return x / y

# Test the functions
print("Addition: 5 + 3 =", add(5, 3))
print("Subtraction: 10 - 4 =", subtract(10, 4))
print("Multiplication: 7 * 2 =", multiply(7, 2))
print("Division: 9 / 3 =", divide(9, 3))
