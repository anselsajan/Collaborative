import time
import random

class TrafficLight:
    def __init__(self):
        self.colors = ['red', 'green', 'yellow']
        self.current_color = 'red'

    def change_color(self):
        if self.current_color == 'red':
            self.current_color = 'green'
        elif self.current_color == 'green':
            self.current_color = 'yellow'
        elif self.current_color == 'yellow':
            self.current_color = 'red'

    def display_color(self):
        print(f'Traffic light is currently {self.current_color}')

def game():
    traffic_light = TrafficLight()
    print('Welcome to the traffic light game!')
    print('Press "c" to change the traffic light color.')
    print('Press "q" to quit the game.')

    while True:
        user_input = input('Enter your choice: ')
        if user_input.lower() == 'c':
            traffic_light.change_color()
            traffic_light.display_color()
        elif user_input.lower() == 'q':
            print('Thanks for playing!')
            break
        else:
            print('Invalid input. Please try again.')

if __name__ == '__main__':
    game()
