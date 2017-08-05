import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Captain } from './captain';
import { Ship } from './ship';

@Component({
	selector: 'start',
	templateUrl: './start.component.html',
	styles: [`
		p { margin: 4px; }
		p img { width: 50%; float: left; }
	`]
})

export class StartComponent {
	@Input() captain: Captain;
	@Output() startGame = new EventEmitter<Captain>();
	//captain: Captain = new Captain();

	emitStart() {
		this.captain.location = 'start';
		console.log("StartComponent:emitStart:captain.name: " + this.captain.name);
		this.startGame.emit(this.captain);
	}

	ngOnInit() {
		if (!this.captain.ship) this.captain.ship = new Ship();
		let audio = new Audio('http://shannonware.com/SpaceTraderSounds/peace%20drone%20c4.ogg');
		audio.play();
	}
}