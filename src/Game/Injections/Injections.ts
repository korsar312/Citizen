import { InjectionsInterface } from "./Injections.Interface";

class Injections implements InjectionsInterface.IInjections {
	private enemies = null;
	private events = null;
	private items = null;

	public getEnemies() {
		return this.enemies;
	}
	public getEvents() {
		return this.events;
	}
	public getItems() {
		return this.items;
	}
}

export default new Injections();
