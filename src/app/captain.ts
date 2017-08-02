import { Ship } from './ship';

export class Captain {
	id: number;
	name: string;
	credits: number;
	debt: number;
	location: string;
	ship: Ship;

	constructor() {
		this.id = 0;
		this.name = 'Ahab';
		this.credits = 0;
		this.debt = 0;
		this.location = "start";
		this.ship = new Ship();
	}
}