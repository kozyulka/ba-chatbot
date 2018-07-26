'use strict';

class CurrencyResponse {
    constructor(amount, from, to) {
        this.sender = 'bot';
        this.text = this.getText(amount, from, to);
    }

    getText(amount, from, to) {
        const result = this.convert(amount, from, to);

        return `${amount} ${from} = ${result} ${to}`;
    }

    convert(amount, from, to) {
        if (from === 'dollar') {
            if (to === 'euro') {
                return this.getDollarToEuro(amount);
            }

            if (to === 'hryvnia') {
                return this.getDollarToHryvnia(amount);
            }
        }

        if (from === 'euro') {
            if (to === 'dollar') {
                return this.getEuroToDollar(amount);
            }

            if (to === 'hryvnia') {
                return this.getEuroToHryvnia(amount);
            }
        }

        if (from === 'hryvnia') {
            if (to === 'dollar') {
                return this.getHryvniaToDollar(amount);
            }

            if (to === 'euro') {
                return this.getHryvniaToEuro(amount);
            }
        }
    }

    getDollarToEuro(amount) {
        return amount * 0.86;
    }

    getEuroToDollar(amount) {
        return amount * 1.17;
    }

    getHryvniaToEuro(amount) {
        return amount * 0.032;
    }

    getEuroToHryvnia(amount) {
        return amount * 31.05;
    }

    getHryvniaToDollar(amount) {
        return amount * 0.038;
    }

    getDollarToHryvnia(amount) {
        return amount * 26.63;
    }
}

module.exports = CurrencyResponse;
