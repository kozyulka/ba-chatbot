'use strict';

const WeatherResponse = require('../responses/WeatherResponse');

module.exports = (messageByWords) => {
    if (messageByWords[5] === 'on') {
        return new WeatherResponse(`${messageByWords[5]} ${messageByWords[6]}`, messageByWords[8]);
    }

    return new WeatherResponse(messageByWords[5], messageByWords[7]);
};
