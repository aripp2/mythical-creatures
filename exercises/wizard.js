class Wizard {
	constructor (object) {
		this.name = object.name;
		this.bearded = object.bearded;
			if (this.bearded === undefined) {
				this.bearded = true;
			}
		this.isRested = true;
		this.counter = 0; 
	}
	incantation(message) {
		return message.toUpperCase();
	}
	cast() {
		this.counter ++;
		if (this.counter >= 3) {
			this.isRested = false;
			return 'I SHALL NOT CAST';
		} 
		return 'MAGIC BULLET';
	}
}

module.exports = Wizard;