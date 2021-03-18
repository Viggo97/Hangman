import {
    Quote
} from './Quote.js';

export class Game {

    quotes = [{
        text: 'pan tadeusz',
        category: 'Utwór literacki'
    }, {
        text: 'janko muzykant',
        category: 'Utwór literacki',
    }, {
        text: 'żółć',
        category: 'Trudne'
    }];

    constructor({
        lettersWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper
    }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {
            text,
            category
        } = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text);
    }

    guess(letter) {
        this.quote.guess(letter);
        this.drawQuote();
    }

    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.guess(label));
            this.lettersWrapper.appendChild(button);
        }
    }

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
    }

    start() {
        this.drawLetters();
        this.drawQuote();
    }
}

const game = new Game({
    lettersWrapper: document.querySelector('.letters'),
    categoryWrapper: document.querySelector('.category'),
    wordWrapper: document.querySelector('.word'),
    outputWrapper: document.querySelector('.output'),
});

game.start();