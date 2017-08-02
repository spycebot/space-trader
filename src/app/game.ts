import { Captain } from './captain';

export class Game {
	id: number;
	player: Captain;

	constructor() {
		this.id = 0;
		this.player = new Captain();
	}
}