'use strict';

const WeatherResponse = require('./WeatherResponse');
const CurrencyResponse = require('./CurrencyResponse');
const NotesResponse = require('./NotesResponse');
const QuoteResponse = require('./QuoteResponse');
const DefaultResponse = require('./DefaultResponse');

const advise = [
    'Delete the negative; accentuate the positive!',
    'Trust your instincts',
    'Be patient and persistent',
    'Relax, take it easy',
    'Drink more water',
    'Double cheeseburger menu',
    'Do what is right, not what is easy'
];

class ChatBot {
    constructor() {
        this.notes = [];
    }

    handleMessage(message) {
        const messageByWords = message.text.toLowerCase().split(' ');
        console.log(messageByWords);

        if (messageByWords[1]=== 'what' && messageByWords[2] === 'is' && messageByWords[3] === 'the' && messageByWords[4] === 'weather') {
            return this.handleWeather(messageByWords);
        }

        if (messageByWords[1] === 'convert') {
            return this.handleCurrency(messageByWords[2], messageByWords[3], messageByWords[5]);
        }

        if (messageByWords[2] === 'note') {
            return this.handleNotes(messageByWords);
        }

        if (messageByWords[1] === 'show' && messageByWords[2] === 'quote') {
            return this.handleQuotes();
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

        return new DefaultResponse();
    }

    handleWeather(messageByWords) {
        if (messageByWords[5] === 'on') {
            return new WeatherResponse(`${messageByWords[5]} ${messageByWords[6]}`, messageByWords[8]);
        }

        return new WeatherResponse(messageByWords[5], messageByWords[7]);
    }

    handleCurrency(amount, from, to) {
        return new CurrencyResponse(amount, from, to);
    }

    handleNotes(messageByWords) {
        switch (messageByWords[1]) {
            case 'save':
                this.notes.push({
                    title: messageByWords.join(' ').match(/title: (.*?), body/)[1],
                    body: messageByWords.join(' ').match(/body: (.*?) *$/)[1],
                });

                return new NotesResponse();

            case 'show':
                if (messageByWords[3] === 'list') {
                    return new NotesResponse(JSON.stringify(this.notes));
                }

                const note = this.notes.find((note) => {
                    return note.title = messageByWords[3];
                });

                if (!note) {
                    return new NotesResponse('No notes with this title');
                }

                return new NotesResponse(`title: "${note.title}" body: "${note.body}"`);

            case 'delete':
                this.notes = this.notes.filter((note) => {
                    return note.title !== messageByWords[3];
                });

                return new NotesResponse();

            default:
                return new DefaultResponse();
        }
    }

    handleAdvise() {

    }

    handleQuotes() {
        return new QuoteResponse();
    }

    handleUnknown() {

    }
}

module.exports = ChatBot;
