document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const resultDiv = document.getElementById('result');

    button.addEventListener('click', function() {
        resultDiv.innerText = 'Button clicked!';
    });
});
