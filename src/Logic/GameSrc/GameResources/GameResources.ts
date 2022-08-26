import { Domains } from "./Domains/Domains";
import { Lists } from "./Lists/Lists";
import { Locations } from "./Locations/Locations";

export class GameResources {
	public domains: Domains;
	public lists: Lists;
	public locate: Locations;

	constructor() {
		this.domains = new Domains();
		this.lists = new Lists();
		this.locate = new Locations();
	}
}
