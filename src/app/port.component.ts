import { Component, Input, Output, EventEmitter } from '@angular/core';

import { COMMODITIES } from './commodities';

import { Port, PORTS } from './port';
import { Captain } from './captain';
import { Ship } from './ship';

@Component({
	selector: 'port',
	templateUrl: 'port.component.html',
	styles: [`
		img { width: 50%; }
		li { text-decoration: none; border: 1px solid blue; }
		li:hover { border-color: orange; }
		input { width: 100%; }
		td { text-align: center; }
	`]
})

export class PortComponent {
	@Input() port: Port;
	@Input() captain: Captain;
	@Output() restart = new EventEmitter<Captain>();
	@Output() travelSpace = new EventEmitter<Captain>();
	commodities = COMMODITIES;
	view: string = "welcome";
	ports = PORTS;

	emitRestart() {
		this.restart.emit(this.captain);
	}

	emitTravel() {
		this.travelSpace.emit(this.captain); // not really
	}

	setDestination(p) {
		this.captain.destination = p;
	}

	buy(i: number) {
		console.log("PortComponent:buy:i: " + i);
	}

	startBuy(i: number) {
		console.log("PortComponent:startBuy:i: " + i);

	}
	
	stopBuy() {
		console.log("PortComponent:stopBuy!");

	}
}