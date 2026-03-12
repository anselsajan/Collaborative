let redLight = document.getElementById('red-light');
let yellowLight = document.getElementById('yellow-light');
let greenLight = document.getElementById('green-light');
let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let intervalId;

startButton.addEventListener('click', startTrafficLight);
stopButton.addEventListener('click', stopTrafficLight);

function startTrafficLight() {
    intervalId = setInterval(() => {
        redLight.classList.toggle('active');
        yellowLight.classList.remove('active');
        greenLight.classList.remove('active');
        setTimeout(() => {
            redLight.classList.remove('active');
            yellowLight.classList.add('active');
            setTimeout(() => {
                yellowLight.classList.remove('active');
                greenLight.classList.add('active');
                setTimeout(() => {
                    greenLight.classList.remove('active');
                    redLight.classList.add('active');
                }, 3000);
            }, 1000);
        }, 5000);
    }, 10000);
}

function stopTrafficLight() {
    clearInterval(intervalId);
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}
