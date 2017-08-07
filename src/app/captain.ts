import { Ship } from './ship';
import { Port } from './port';

export class Captain {
	id: number;
	name: string;
	credits: number;
	debt: number;
	location: string;
	ship?: Ship;
	destination?: Port;
	victory: number;

	constructor() {
		this.id = 0;
		this.name = 'Ahab';
		this.credits = 0;
		this.debt = 0;
		this.location = "start";
		this.ship = new Ship();
		this.victory = 10000;
	}
}