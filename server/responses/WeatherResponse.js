'use strict';

class WeatherResponse {
    constructor(day, city) {
        this.sender = 'bot';
        this.text = this.getText(day, city);
    }

    getText(day, city) {
        const weather = this.getWeather(city);

        return `The weather is ${weather.weather} in ${city} ${day}, temperature ${weather.degrees} C`;
    }

    getWeather(city) {
        switch (city) {
            case 'kyiv':
                return {
                    weather: 'rainy',
                    degrees: '+28',
                };

            case 'lviv':
                return {
                    weather: 'partly cloudy',
                    degrees: '+23',
                };

            case 'kharkiv':
                return {
                    weather: 'showy',
                    degrees: '-6',
                };

            case 'odessa':
                return {
                    weather: 'sunny',
                    degrees: '+36',
                };

            case 'dnipro':
                return {
                    weather: 'cloudy',
                    degrees: '+20',
                };

            default:
                return {
                    weather: 'hell',
                    degrees: '+666',
                };
        }
    }
}

module.exports = WeatherResponse;
