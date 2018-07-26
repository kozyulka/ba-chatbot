'use strict';

const WeatherResponse = require('./WeatherResponse');
const CurrencyResponse = require('./CurrencyResponse');

const advise = [
    'Delete the negative; accentuate the positive!',
    'Trust your instincts',
    'Be patient and persistent',
    'Relax, take it easy',
    'Drink more water',
    'Double cheeseburger menu',
    'Do what is right, not what is easy'
];

const quotes= [
    {
        text: 'Change your life today. Don\'t gamble on the future, act now, without delay.',
        author: 'Simone de Beauvoir'
    },
    {
        text: 'Only I can change my life. No one can do it for me',
        author: 'Carol Burnett'
    },
    {
        text: 'Life is 10% what happens to you and 90% how you react to it.',
        author: 'Charles R. Swindoll'
    },
    {
        text: 'The most effective way to do it, is to do it.',
        author: 'Amelia Earhart'
    },
    {
        text: 'A goal is a dream with a deadline.',
        author: 'Napoleon Hill'
    },
    {
        text: 'Every day brings new choices.',
        author: ' Martha Beck'
    },
    {
        text: 'Adopt the pace of nature: her secret is patience.',
        author: 'Ralph Waldo Emerson'
    },
];

class ChatBot {
    handleMessage(message) {
        const messageByWords = message.text.toLowerCase().split(' ');
        console.log(messageByWords);

        if (messageByWords[1]=== 'what' && messageByWords[2] === 'is' && messageByWords[3] === 'the' && messageByWords[4] === 'weather') {
            if (messageByWords[5] === 'on') {
                return this.handleWeather(`${messageByWords[5]} ${messageByWords[6]}`, messageByWords[8]);
            }

            console.log('weather');
            return this.handleWeather(messageByWords[5], messageByWords[7]);
        }

        if (messageByWords[1] === 'convert') {
            console.log('currency');

            return this.handleCurrency(messageByWords[2], messageByWords[3], messageByWords[5]);
        }

        if (messageByWords[2] === 'note') {
            console.log('notes');
            return;
        }

        if (messageByWords[1] === 'show' && messageByWords[2] === 'quote') {
            console.log('quotes');
            return;
        }

        const wordBeforeLast = messageByWords[messageByWords.length - 2] || '';

        if (
            messageByWords.length >= 3 &&
            messageByWords.lastIndexOf('#@)₴?$0') === messageByWords.length - 1 &&
            wordBeforeLast.lastIndexOf('?') === wordBeforeLast.length - 1
        ) {
            console.log('advise');
            return;
        }

        console.log('I dont understand :(');
    }

    handleWeather(day, city) {
        return new WeatherResponse(day, city);
    }

    handleCurrency(amount, from, to) {
        return new CurrencyResponse(amount, from, to);
    }

    handleNotes() {

    }

    handleAdvise() {

    }

    handleQuotes() {

    }

    handleUnknown() {

    }
}

module.exports = ChatBot;
