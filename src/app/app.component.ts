import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

import { COMMODITIES } from './commodities';

import { Captain } from './captain';
import { Ship } from './ship';
import { Game } from './game';
import { Port } from './port';

import * as THREE from 'three';

//declare var THREE: any;
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
  commodities = COMMODITIES;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //renderer = new THREE.WebGLRenderer({alpha: true, canvas: document.getElementById("canvas")});
	renderer = new THREE.WebGLRenderer();
	renderSet: THREE.Object3D[] = [];

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

  	let peace = true;

	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );

	let geometry = new THREE.BoxGeometry( 2, 2, 2 );
	let material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
	let cube = new THREE.Mesh( geometry, material );
	this.scene.add( cube );
	this.renderSet.push(cube);
	console.log("AppComponent:ngOnInit:this.renderSet.length: " + this.renderSet.length);

	this.camera.position.z = 5;
	let keys = Object.keys(this.scene);
	console.log("AppComponent:ngOnInit:this.scene keys: " + keys);
	console.log(" toJSON: " + this.scene.toJSON() + ", children: " + this.scene.children);
	console.log(" children keys: " + Object.keys(this.scene.children));
    this.render();
  }

  render() {
    let self = this;
    requestAnimationFrame(function() {
      self.render();
    });
    this.renderer.render(this.scene, this.camera);
    this.animate();
  }

  animate() {
	//cube.rotation.x += 0.001;
	//cube.rotation.y += 0.001;
	// Lame render
	for (let o of this.renderSet) {
		o.rotation.x += 0.001;
		o.rotation.y += 0.001;
	}
  }

  setLocalStorage(o: any) {
  	localStorage.setItem('game', JSON.stringify(o));
  }

  clearStorage(){
  	let no = new Game();
  	localStorage.setItem('game', JSON.stringify(no));
  	console.log('AppComponent:clearStorage:no: ' + no);
  }

  startGame(c: Captain) {
  	this.game.player = this.captain = c;
  	console.log("AppComponent:startGame:this.game.player.name: " + this.game.player.name + ", this.captain.name: " + this.captain.name);
  	this.captain.location = 'port';
  	this.captain.debt = this.captain.credits;
  	this.setLocalStorage(this.game);
  }

  restart() {
  	this.captain = new Captain();
  	console.log("AppComponent:restart: new captain name: " + this.captain.name);
  }

  travelSpace() {
  	this.captain.location = 'space';
  }

  arrivePort() {
  	this.captain.location = 'port';
  }

  setUp3DScene() {

  }
}