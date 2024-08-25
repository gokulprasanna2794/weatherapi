document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '32866f3919a9bc459e198d5a2c9f24c5'; // Add your OpenWeatherMap API key here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
