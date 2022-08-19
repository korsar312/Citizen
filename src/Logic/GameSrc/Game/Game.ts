import { Domains } from "./Domains/Domains";
import { Lists } from "./Lists/Lists";
import { Saving } from "./Repository/Saveing/Saving";
import { Hero } from "./Repository/Hero/Hero";

export class Game {
	public domains: Domains;
	public lists: Lists;
	public saving: Saving;
	public hero: Hero;

	constructor() {
		this.domains = new Domains();
		this.lists = new Lists();
		this.saving = new Saving();
		this.hero = new Hero();
	}
}

export default new Game();
