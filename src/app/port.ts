import { Commodity } from './commodities';

export class Port {
	id: number;
	name: string;
	description: string;
	textureUrl: string;
	bumpTextureUrl: string;
	deficits?: Commodity[];
	surplus?: Commodity;
	bprices?: number[];
	sprices?: number[];

	constructor() {
		this.id = 0;
		this.name = "Earth International";
		this.description = "Mostly harmless.";
		this.textureUrl = "./assets/earthbare.jpg";
	}
}

export const PORTS: Port[] = [
	{ id: 1, name: "Mercury", description: "Mercury rocks!", textureUrl: './assets/mercurymap.jpg', bumpTextureUrl: './assets/mercurybump.jpg', 
		deficits: [new Commodity('Water'), new Commodity('Air'), new Commodity('Rare earth')], surplus: new Commodity('Dilithium') },
	{ id: 2, name: "Venus", description: "Runaway greenhouse gases never hurt anybody.", textureUrl: './assets/venusmap.jpg', bumpTextureUrl: './assets/venusbump.jpg', 
		deficits: [new Commodity('Water'), new Commodity('Dilithium')], surplus: new Commodity('Rare earth') },
	{ id: 3, name: "Earth", description: "Mostly harmless.", textureUrl: './assets/earthmap1k.jpg', bumpTextureUrl: './assets/earthbump1k.jpg', 
		deficits: [new Commodity('Dilithium'), new Commodity('Pearls'), new Commodity('Baleen')], surplus: new Commodity('Water') },
	{ id: 4, name: "Mars", description: "Yawn. Who hasn't been to Mars?", textureUrl: './assets/marsmap1k.jpg', bumpTextureUrl: './assets/marsbump1k.jpg', 
		deficits: [new Commodity('Water'), new Commodity('Baleen'), new Commodity('Pearls')], surplus: new Commodity('Ore') },
	{ id: 5, name: "Jupiter", description: "You have never seen a more jovial bunch.", textureUrl: './assets/jupitermap.jpg', bumpTextureUrl: './assets/jupitermap.jpg', 
		deficits: [new Commodity('Air'), new Commodity('Rare earth')], surplus: new Commodity('Metal') },
	{ id: 6, name: "Saturn", description: "Spectacular rings. Exciting night life.", textureUrl: './assets/saturnmap.jpg', bumpTextureUrl: './assets/saturnmap.jpg', 
		deficits: [new Commodity('Water'), new Commodity('Rare earth')] },
	{ id: 7, name: "Neptune", description: "Don't let the burlap sack clothes fool you. They are rich.", textureUrl: './assets/uranusmap.jpg', bumpTextureUrl: './assets/uranusmap.jpg', 
		deficits: [new Commodity('Dilithium'), new Commodity('Rare earth'), new Commodity('Air'), new Commodity('Ore')], surplus: new Commodity('Baleen') },
	{ id: 8, name: "Uranus", description: "The last 'planet' in the solar system.", textureUrl: './assets/neptunemap.jpg', bumpTextureUrl: './assets/neptunemap.jpg', 
		deficits: [new Commodity('Metal'), new Commodity('Ore'), new Commodity('Air')], surplus: new Commodity('Food') }
];
