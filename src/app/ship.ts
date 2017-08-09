export class Ship {
	id: number;
	name: string;
	size: number;
	hp: number;
	hold: number;
	location: string;

	constructor() {
		this.id = 0;
		this.name = "Heart of Gold";
		this.size = this.hp = this.hold = 50;
		this.location = 'port';
	}
}