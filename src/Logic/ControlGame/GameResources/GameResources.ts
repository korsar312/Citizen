import { Domains } from "./Domains/Domains";
import { Lists } from "./Lists/Lists";
import { LocationsModule } from "./Locations/Locations.module";

export class GameResources {
	public domains: Domains;
	public lists: Lists;
	public locate: LocationsModule;

	constructor() {
		this.domains = new Domains();
		this.lists = new Lists();
		this.locate = new LocationsModule();
	}
}
