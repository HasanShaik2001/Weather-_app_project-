document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'your_api_key_here';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById('weather-result').innerText = 'City not found!';
                return;
            }

            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weather-result').innerText = `
                Temperature: ${temp}°C
                Description: ${description}
                Humidity: ${humidity}%
                Wind Speed: ${windSpeed} m/s
            `;
        })
        .catch(error => {
            document.getElementById('weather-result').innerText = 'Error fetching weather data!';
            console.error(error);
        });
});
