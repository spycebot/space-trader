import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

import { Captain } from './captain';

class Game {
	id: number;
	player: Captain;

	constructor() {
		this.id = 0;
		this.player = new Captain();
	}
}

//const locations: string[] = ["homePort", "port", "space", "pirates"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Space Trader';
  game: Game;
  captain: Captain;
  currentViews: Array<any> = [];

  ngOnInit() {
  	/*
  	let lastUser = JSON.parse(localStorage.getItem('player'));
  	//preceded by storage call
  	this.game = new Game();
  	if (lastUser) { this.captain = lastUser }
  	else this.captain = new Captain();
	*/
	
  	let lastGame = JSON.parse(localStorage.getItem('game'));
  	if (lastGame) { this.game = lastGame; }
  	else { this.game = new Game(); } 
  	this.captain = this.game.player;
  	this.currentViews.push('<start></start>');
  	console.log('currentViews.length: ' + this.currentViews.length);

  }

  setLocalStorage(o: any) {
  	localStorage.setItem('game', JSON.stringify(o));
  }

  startGame(c: Captain) {
  	this.captain = c;
  	console.log("AppComponent:startGame:game.player.name: " + this.game.player.name);
  	this.setLocalStorage(this.game);
  }
}
