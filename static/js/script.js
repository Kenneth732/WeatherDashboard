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
        
    }
})