class Game {
    constructor({
        lettersWrapper,
        categoryWrapeer,
        wordWrapper,
        outputWrapper
    }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapeer = categoryWrapeer;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
    }

    guess(label) {
        console.log(label);
    }

    start() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.guess(label));
            this.lettersWrapper.appendChild(button);
        }
    }
}