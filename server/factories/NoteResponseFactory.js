'use strict';

const NoteResponse = require('../responses/NoteResponse');

module.exports = (text) => {
    return new NoteResponse(text);
};
