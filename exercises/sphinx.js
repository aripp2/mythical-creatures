class Sphinx {
	constructor() {
		this.riddles = [];
		this.heroesEaten = 0;
	}
	collectRiddle(obj) {
		this.riddles.push(obj);
	if (this.riddles.length >= 4) {
		this.riddles.shift();
		}
	}
	attemptAnswer(guess) {
		for (var i = 0; i < this.riddles.length; i++) {
			if (guess === this.riddles[i].answer){ 
				this.riddles.splice(i, 1);
			}
			if (this.riddles.length === 0) {
			return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`; 
			}
		}
			this.heroesEaten ++;
			return 'That wasn\'t that hard, I bet you don\'t get the next one';
	}
}

module.exports = Sphinx;

