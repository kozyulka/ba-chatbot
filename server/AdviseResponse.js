'use strict';

const advise = [
    'Delete the negative; accentuate the positive!',
    'Trust your instincts',
    'Be patient and persistent',
    'Relax, take it easy',
    'Drink more water',
    'Double cheeseburger menu',
    'Do what is right, not what is easy'
];

class AdviseResponse {
    constructor() {
        this.sender = 'bot';
        this.text = advise[Math.floor(Math.random() * (6 - 0 + 1)) + 0];
    }
}

module.exports = AdviseResponse;
