import { Game } from "../Game";
import { injectionsInterface } from "./Injections.interface";

class Injections extends Game implements injectionsInterface.IInjections {
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

const injections = new Injections();
export default injections;
