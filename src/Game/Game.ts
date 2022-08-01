import { Enemies } from "./Domains/Enemies/Enemies";
import { Items } from "./Domains/Items/Items";
import { Events } from "./Domains/Events/Events";
import injections from "./Injections/Injections";
import { Times } from "./Domains/Times/Times";
import Repository from "./Repository/Repository";

export class Game {
	public enemies: Enemies;
	public items: Items;
	public events: Events;
	public times: Times;

	constructor() {
		this.enemies = new Enemies(injections);
		this.items = new Items(injections);
		this.events = new Events(injections);
		this.times = new Times(Repository.getSave().date);
	}
}

export default new Game();
