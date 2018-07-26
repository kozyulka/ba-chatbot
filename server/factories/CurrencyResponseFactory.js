'use strict';

const CurrencyResponse = require('../responses/CurrencyResponse');

module.exports = (amount, from, to) => {
    return new CurrencyResponse(amount, from, to);
};
