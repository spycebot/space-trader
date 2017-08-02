import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

import { Captain } from './captain';
import { Ship } from './ship';
import { Game } from './game';
import { Port } from './port';

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
  port: Port;

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
  	if (!this.port) { this.port = new Port(); }
  	/* Fall back
  	this.game = new Game();
  	this.captain = this.game.player;
  	this.port = new Port();
  	*/
  }

  setLocalStorage(o: any) {
  	localStorage.setItem('game', JSON.stringify(o));
  }

  startGame(c: Captain) {
  	this.captain = c;
  	console.log("AppComponent:startGame:game.player.name: " + this.game.player.name);
  	this.captain.location = 'port';
  	this.captain.debt = this.captain.credits;
  	this.setLocalStorage(this.game);
  }

  restart() {
  	this.captain = new Captain();
  }
}
