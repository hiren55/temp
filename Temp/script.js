document.getElementById('convert-button').addEventListener('click', function(event) {
    convertTemperature();
});

document.getElementById('temperature-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature-input').value;
    const unitInput = document.getElementById('unit-input').value;

    // Validate the input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp;
    let resultText = '';

    // Conversion functions
    const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
    const celsiusToKelvin = (celsius) => celsius + 273.15;
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
    const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15;
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32;

    // Perform conversion based on selected unit
    switch (unitInput) {
        case 'celsius':
            convertedTemp = `Fahrenheit: ${celsiusToFahrenheit(temperature).toFixed(4)} °F, Kelvin: ${celsiusToKelvin(temperature).toFixed(4)} K`;
            break;
        case 'fahrenheit':
            convertedTemp = `Celsius: ${fahrenheitToCelsius(temperature).toFixed(4)} °C, Kelvin: ${fahrenheitToKelvin(temperature).toFixed(4)} K`;
            break;
        case 'kelvin':
            convertedTemp = `Celsius: ${kelvinToCelsius(temperature).toFixed(4)} °C, Fahrenheit: ${kelvinToFahrenheit(temperature).toFixed(4)} °F`;
            break;
    }

    resultText = `Result: ${convertedTemp}`;
    document.getElementById('result').innerText = resultText;
}
