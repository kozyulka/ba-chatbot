'use strict';

class WeatherResponse {
    constructor(day, city) {
        this.sender = 'bot';
        this.text = `The weather is rainy in ${city} ${day}, temperature +30 C`;
    }
}

module.exports = WeatherResponse;
