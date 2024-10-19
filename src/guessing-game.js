class GuessingGame {
    constructor() {
        this.min = null
        this.max = null
        this.currentNumber = null
    }
    

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.currentNumber = Math.round((this.min + this.max) / 2)
        return this.currentNumber
    }

    lower() {
        this.max = this.currentNumber
    }

    greater() {
        this.min = this.currentNumber
    }
}

module.exports = GuessingGame;
