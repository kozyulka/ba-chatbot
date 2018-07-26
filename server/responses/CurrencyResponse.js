'use strict';

class CurrencyResponse {
    constructor(amount, from, to) {
        this.sender = 'bot';
        this.text = this.getText(amount, from, to);
    }

    getText(amount, from, to) {
        // currying
        const convert = this.convert(from, to);
        const result = convert(amount);

        return `${amount} ${from} = ${result} ${to}`;
    }

    convert(from, to) {
        let multiply;

        if (from === 'dollar') {
            if (to === 'euro') {
                multiply = this.multiply(0.86);
            } else if (to === 'hryvnia') {
                multiply = this.multiply(26.63);
            }
        } else if (from === 'euro') {
            if (to === 'dollar') {
                multiply = this.multiply(1.17);
            }

            if (to === 'hryvnia') {
                multiply = this.multiply(31.05);
            }
        } else if (from === 'hryvnia') {
            if (to === 'dollar') {
                multiply = this.multiply(0.038);
            }

            if (to === 'euro') {
                multiply = this.multiply(0.032);
            }
        }

        return (amount) => multiply(amount);
    }

    //pure function
    multiply(ratio) {
        return amount => ratio * amount;
    }
}

module.exports = CurrencyResponse;
