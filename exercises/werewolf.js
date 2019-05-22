class Werewolf {
	constructor(name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}
	change() {
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry;
		// if (this.human === true) {
		// 	this.human = false;
		// 	this.wolf = true;
		// 	this.hungry = true;
		// } else {
		// 	this.human = true;
		// 	this.wolf = false;
		// 	this.hungry = false;
		// }
	}
	eat(victim) {
		if (this.hungry = true) {
		victim.alive = false;
		this.change();
		}
	}

}

module.exports = Werewolf;