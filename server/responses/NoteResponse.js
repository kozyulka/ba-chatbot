'use strict';

class NoteResponse {
    constructor(text) {
        this.sender = 'bot';
        this.text = text || 'Done!';
    }
}

module.exports = NoteResponse;
