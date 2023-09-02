document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const weatherIcon = document.getElementById('weatherIcon');
    const description = document.getElementById('description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const forecastList = document.getElementById('forecastList');

    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            getWeatherData(city);
        }
    });

    async function getWeatherData(city){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            const { main, weather, wind } = data;
            const [weatherData] = weather;

            weatherIcon.style.backgroundImage = `url('https://openweathermap.org/img/w/${weatherData.icon}.png')`;
            description.textContent = weatherData.description;
            temperature.textContent = main.temp;
            humidity.textContent = main.humidity;
            windSpeed.textContent = wind.speed;

            getForecastData(city);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
})