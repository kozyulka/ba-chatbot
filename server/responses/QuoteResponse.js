'use strict';

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

class QuoteResponse {
    constructor() {
        this.sender = 'bot';
        this.text = this.getText();
    }

    getText() {
        const quote = quotes[Math.floor(Math.random() * (6 - 0 + 1)) + 0];

        return `"${quote.text}" - ${quote.author}`;
    }
}

module.exports = QuoteResponse;
