import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

import { COMMODITIES } from './commodities';

import { Captain } from './captain';
import { Ship } from './ship';
import { Game } from './game';
import { Port, PORTS } from './port';

import * as THREE from 'three';

//declare var THREE: any;
//const locations: string[] = ["homePort", "port", "space", "pirates"];

/*
const PORTS: Port[] = [
	{ id: 1, name: "Earth", description: "Mostly harmless.", textureUrl: './assets/earthbare.jpg' },
	{ id: 2, name: "Venus", description: "Runaway greenhouse gases never hurt anybody.", textureUrl: './assets/venusmap.jpg' }
];
*/

const VIEW = ['game', 'credits', 'win', 'lose'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Space Trader';
  game: Game;
  captain: Captain;
  port: Port; // i.e. current port
  ports = PORTS;
  commodities = COMMODITIES;
  view = VIEW[0];

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //renderer = new THREE.WebGLRenderer({alpha: true, canvas: document.getElementById("canvas")});
	renderer = new THREE.WebGLRenderer();
	animateSet: THREE.Object3D[] = [];

	//dirLight: THREE.DirectionalLight = new THREE.DirectionalLight( 0xffffff );
	dirLight: THREE.DirectionalLight;
	//pointLight, 
	ambientLight: THREE.AmbientLight;
	planet: THREE.Mesh;

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
  	//if (!this.port) { this.port = new Port(); }
  	if (!this.port) { this.port = this.ports[2]; }
  	/* Fall back
  	this.game = new Game();
  	this.captain = this.game.player;
  	this.port = new Port();
  	*/

  	let peace = true;

  	this.setUp3DScene();
  	/*
	let keys = Object.keys(this.scene);
	console.log("AppComponent:ngOnInit:this.scene keys: " + keys);
	console.log(" toJSON: " + this.scene.toJSON() + ", children: " + this.scene.children);
	console.log(" children keys: " + Object.keys(this.scene.children));
	*/
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
  	let r = Date.now() * 0.00001;
	//cube.rotation.x += 0.001;
	//cube.rotation.y += 0.001;
	// Lame render
	/*
	for (let o of this.animateSet) {
		o.rotation.x += 0.001;
		o.rotation.y += 0.001;
	}
	*/

	// OK console.log("AppComponent:animate: camera.position: " + this.camera.position.x + ", " + this.camera.position.y + ", " + this.camera.position.z + ".");
	if (this.captain.location == 'port') {
		this.camera.position.x = 5 * Math.cos( r );
		this.camera.position.z = 5 * Math.sin( r );
		this.camera.lookAt ( this.planet.position );
	}

	//for (let o of this.animateSet) {
		//o.position.x = 5 * Math.cos( r );
		//o.position.x = 5 * Math.sin( r );
		//o.position.z = 5 * Math.sin( r );
		//o.position.y = 5 * Math.sin( r );
		//o.lookAt( this.planet.position );
	//}
  }

  setLocalStorage(o: any) {
  	localStorage.setItem('game', JSON.stringify(o));
  }

  clearStorage(){
  	let no = new Game();
  	localStorage.setItem('game', JSON.stringify(no));
  	console.log('AppComponent:clearStorage:no.id: ' + no.id);
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

  arrivePort(p) {
  	this.captain.location = 'port';
  	this.port = p;
  	//let planet = this.scene.getObjectByName("planet");
  	//console.log("AppComponent:arrivePort:planet.uuid: " + planet.id);
  	//planet.material.map = new THREE.TextureLoader().load(p.textureUrl);
	let textureUrl: string = this.port.textureUrl;
	let bumpMapTextureUrl: string = this.port.bumpTextureUrl;
	let texture = new THREE.TextureLoader().load(textureUrl);
	let bumpMapTexture = new THREE.TextureLoader().load(bumpMapTextureUrl);
	this.planet.material = new THREE.MeshPhongMaterial({ map: texture, bumpMap: bumpMapTexture, bumpScale: 0.002 });
	//console.log("AppComponent:arrivePort:planet.children.length: " + planet.children.length);

	// WIN LOSE EVALUATION
	if (this.port.name == 'Earth' && (this.captain.credits > this.captain.victory)) {
		this.view = VIEW[2];
	}
  }

  setUp3DScene() {

	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );

	/*
	let geometry = new THREE.BoxGeometry( 2, 2, 2 );
	let material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
	let cube = new THREE.Mesh( geometry, material );
	*/
	//let textureUrl: string = '/assets/earthbare.jpg';
	let textureUrl: string = this.port.textureUrl;
	let bumpMapTextureUrl: string = this.port.bumpTextureUrl;
	let texture = new THREE.TextureLoader().load(textureUrl);
	let bumpMapTexture = new THREE.TextureLoader().load(bumpMapTextureUrl);
	let mesh = new THREE.Mesh(
					new THREE.SphereBufferGeometry( 2, 32, 16 ),
					new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture, bumpMap: bumpMapTexture, bumpScale: 0.002 } ) // 
				);
	this.planet = mesh;
	//console.log("AppComponent:setUp3DScene:mesh.name: " + mesh.name);
	this.scene.add( mesh );
	this.animateSet.push( mesh );
	//console.log("AppComponent:ngOnInit:this.animateSet.length: " + this.animateSet.length);

	this.camera.position.z = 5;

	this.dirLight = new THREE.DirectionalLight( 0xffffff );
	this.dirLight.position.set( -100, 0, -10 ).normalize();
	this.ambientLight = new THREE.AmbientLight( 0x404040, 0.2 );
	//let dlHelper = new THREE.DirectionalLightHelper (this.dirLight, 2);
	this.scene.add( this.dirLight );
	this.scene.add( this.ambientLight );

	let geometry = new THREE.Geometry();
	for ( let i = 0; i < 10000; i ++ ) {
		let vertex = new THREE.Vector3();
		vertex.x = THREE.Math.randFloatSpread( 2000 );
		vertex.y = THREE.Math.randFloatSpread( 2000 );
		vertex.z = THREE.Math.randFloatSpread( 2000 );
		geometry.vertices.push( vertex );
	}
	let particles = new THREE.Points( geometry, new THREE.PointsMaterial( { color: 0x888888 } ) );
	this.scene.add( particles );

  }

  setView(nv) {
  	this.view = VIEW[nv];
  	console.log("AppComponent:setView:this.view: " + this.view);
  }
}