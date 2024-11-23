//

var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML =year;



document.getElementById('lastdatemodified').innerHTML =document.lastModified;


 // Function to calculate wind chill factor
 function calculateWindChill(temp, windSpeed) {
    // Wind chill formula
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

// Static values
const temperature = 49; // Temperature in Fahrenheit
const windSpeed = 4;   // Wind speed in mph

// Check if inputs are valid
if (isNaN(temperature) || isNaN(windSpeed) || temperature > 50 || windSpeed < 3) {
    document.getElementById('result').textContent = "Only temperatures ≤ 50°F and wind speeds ≥ 3 mph.";
} else {
    // Calculate wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the result
    document.getElementById('result').textContent = `Wind chill factor is ${windChill.toFixed(2)}°F.`;
}