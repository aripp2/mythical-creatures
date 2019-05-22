class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.counter = 0;
		this.layingDown = false;
	}
	shoot() {
		this.counter ++;
		if (this.counter >= 3) {
			this.cranky = true;
			return 'NO!';
		} else if (this.layingDown === true) {
			return 'NO!';
		}
		return 'Twang!!!';
	}
	run() {
		this.counter ++;
		if (this.counter >= 3) {
			this.cranky = true;
		} else if (this.layingDown === true) {
			return 'NO!';
		}
		return 'Clop clop clop clop!!!';
	}
	sleep() {
		if (this.layingDown === true){
			this.cranky = false;
			this.counter = 0;
			return 'ZZZZ';
		}
		return 'NO!';
	}
	layDown() {
		this.standing = false;
		this.layingDown = true;
	}
	standUp() {
		this.standing = true;
		this.layingDown = false;
	}
	drinkPotion() {
		if (this.standing === false) {
			return 'Not while I\'m laying down!';
		} else if (this.cranky === false) { 
			this.cranky = true;
		} else {
		this.cranky = false;
		}
	}
}

module.exports = Centaur;