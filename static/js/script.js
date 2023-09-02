document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'b374050776d5cda6d0c789791abb3cd2';


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

    async function getWeatherData(city) {
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

    async function getForecastData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            const { list } = data;

            forecastList.innerHTML = '';

            for (const forecast of list.slice(0, 5)) {
                const { dt_txt, main, weather } = forecast;
                const [weatherData] = weather;

                const forecastItem = document.createElement('div');
                forecastItem.classList.add('forecastItem');
                forecastItem.innerHTML = `
                    <p>Date: ${dt_txt.split(' ')[0]}</p>
                    <p>Time: ${dt_txt.split(' ')[1]}</p>
                    <p>Description: ${weatherData.description}</p>
                    <p>Temperature: ${main.temp} &deg;C</p>
                `;

                forecastList.appendChild(forecastItem);
            }
        } catch (error) {
            console.error('Error fetching forecast data:', error);
        }
    }
});
