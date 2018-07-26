'use strict';

const weatherResponseFactory = require('./factories/WeatherResponseFactory');
const currencyResponseFactory = require('./factories/CurrencyResponseFactory');
const noteResponseFactory = require('./factories/NoteResponseFactory');
const quoteResponseFactory = require('./factories/QuoteResponseFactory');
const adviseResponseFactory = require('./factories/AdviseResponseFactory');
const defaultResponseFactory = require('./factories/DefaultResponseFactory');

class ChatBot {
    constructor() {
        this.notes = [];
    }

    // facade
    handleMessage(message) {
        const messageByWords = message.text.toLowerCase().split(' ');

        if (messageByWords[1]=== 'what' && messageByWords[2] === 'is' && messageByWords[3] === 'the' && messageByWords[4] === 'weather') {
            return weatherResponseFactory(messageByWords);
        }

        if (messageByWords[1] === 'convert') {
            return currencyResponseFactory(messageByWords[2], messageByWords[3], messageByWords[5]);
        }

        if (messageByWords[2] === 'note') {
            return this.handleNotes(messageByWords);
        }

        if (messageByWords[1] === 'show' && messageByWords[2] === 'quote') {
            return quoteResponseFactory();
        }

        const wordBeforeLast = messageByWords[messageByWords.length - 2] || '';

        if (
            messageByWords.length >= 3 &&
            messageByWords.lastIndexOf('#@)₴?$0') === messageByWords.length - 1 &&
            wordBeforeLast.lastIndexOf('?') === wordBeforeLast.length - 1
        ) {
            return adviseResponseFactory();
        }

        return defaultResponseFactory();
    }

    handleNotes(messageByWords) {
        switch (messageByWords[1]) {
            case 'save':
                this.notes.push({
                    title: messageByWords.join(' ').match(/title: (.*?), body/)[1],
                    body: messageByWords.join(' ').match(/body: (.*?) *$/)[1],
                });

                return noteResponseFactory();

            case 'show':
                if (messageByWords[3] === 'list') {
                    if (this.notes.length === 0) {
                        return noteResponseFactory('No saved notes');
                    }

                    return noteResponseFactory(JSON.stringify(this.notes));
                }

                const note = this.notes.find((note) => {
                    return note.title = messageByWords[3];
                });

                if (!note) {
                    return noteResponseFactory('No notes with this title');
                }

                return noteResponseFactory(`title: "${note.title}" body: "${note.body}"`);

            case 'delete':
                this.notes = this.notes.filter((note) => {
                    return note.title !== messageByWords[3];
                });

                return noteResponseFactory();

            default:
                return defaultResponseFactory();
        }
    }
}

module.exports = ChatBot;
