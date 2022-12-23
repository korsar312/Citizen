import { Enemies } from "./Enemies/Enemies";
import { Items } from "./Items/Items";

export class Lists {
	private enemies: Enemies;
	private items: Items;

	constructor() {
		this.enemies = new Enemies();
		this.items = new Items();
	}
}

export default new Lists();
