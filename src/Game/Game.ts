import { Enemies } from "./Domains/Enemies/Enemies";
import { Items } from "./Domains/Items/Items";
import { Events } from "./Domains/Events/Events";
import injections from "./Injections/Injections";

export class Game {
	protected enemies: Enemies;
	protected items: Items;
	protected events: Events;

	constructor() {
		this.enemies = new Enemies(injections);
		this.items = new Items(injections);
		this.events = new Events(injections);
	}
}

const game = new Game();
export default game;
