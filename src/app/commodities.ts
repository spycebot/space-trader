export class Commodity {
	name: string;
	basePrice: number;

	constructor(n: string = 'ether', bp: number = 0) {
		this.name = n;
		this.basePrice = bp;
	}
} 

export const COMMODITIES = [
	{ name: "Air", basePrice: 10 },
	{ name: "Water", basePrice: 50 },
	{ name: "Food", basePrice: 100 },
	{ name: "Ore", basePrice: 500 },
	{ name: "Metal", basePrice: 1000 },
	{ name: "Dilithium", basePrice: 5000 },
	{ name: "Rare earth", basePrice: 10000 },
	{ name: "Baleen", basePrice: 50000 },
	{ name: "Pearls", basePrice: 100000 }
];