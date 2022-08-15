import { Domains } from "./Domains/Domains";
import { Lists } from "./Lists/Lists";
import { Repository } from "./Repository/Repository";

export class Game {
	private domains: Domains;
	private lists: Lists;
	private repository: any;

	constructor() {
		this.domains = new Domains();
		this.lists = new Lists();
		this.repository = new Repository();
	}
}

export default new Game();
