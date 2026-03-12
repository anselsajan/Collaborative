let redLight = document.getElementById('red-light');
let yellowLight = document.getElementById('yellow-light');
let greenLight = document.getElementById('green-light');
let startButton = document.getElementById('start-button');
let intervalId = null;

startButton.addEventListener('click', startTrafficLight);

function startTrafficLight() {
    if (intervalId === null) {
        intervalId = setInterval(changeLight, 3000);
        changeLight();
        startButton.textContent = 'Stop';
        startButton.addEventListener('click', stopTrafficLight);
    }
}

function stopTrafficLight() {
    clearInterval(intervalId);
    intervalId = null;
    startButton.textContent = 'Start';
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

function changeLight() {
    if (redLight.classList.contains('active')) {
        redLight.classList.remove('active');
        yellowLight.classList.add('active');
        setTimeout(() => {
            yellowLight.classList.remove('active');
            greenLight.classList.add('active');
        }, 1000);
    } else if (greenLight.classList.contains('active')) {
        greenLight.classList.remove('active');
        redLight.classList.add('active');
    } else {
        yellowLight.classList.remove('active');
        greenLight.classList.add('active');
    }
}
