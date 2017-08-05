import { Component, Input, Output, EventEmitter } from '@angular/core';

import { COMMODITIES } from './commodities';

import { Port } from './port';
import { Captain } from './captain';
import { Ship } from './ship';

@Component({
	selector: 'port',
	templateUrl: 'port.component.html',
	styles: []
})

export class PortComponent {
	@Input() port: Port;
	@Input() captain: Captain;
	@Output() restart = new EventEmitter<Captain>();
	@Output() travelSpace = new EventEmitter<Captain>();
	commodities = COMMODITIES;
	view: string = "welcome";

	emitRestart() {
		this.restart.emit(this.captain);
	}

	emitTravel() {
		this.travelSpace.emit(this.captain); // not really
	}
}