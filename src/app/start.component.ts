import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Captain } from './captain';

@Component({
	selector: 'start',
	templateUrl: './start.component.html',
	styles: [`p { background-color: white; }`]
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
}