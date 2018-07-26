'use strict';

class NotesResponse {
    constructor(text) {
        this.sender = 'bot';
        this.text = text || 'Done!';
    }
}

module.exports = NotesResponse;
