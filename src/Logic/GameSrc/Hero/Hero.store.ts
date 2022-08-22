import { LocationsInterface } from "../GameResources/Locations/Locations.interface";
import gameResources from "../GameResources/GameResources";

export class HeroStore {
	private currentLocate: LocationsInterface.TDialog = gameResources.locate.farund.dialog.start();

	constructor() {
		this.currentLocate = gameResources.locate.farund.dialog.start();
	}

	public getCurrentLocate() {
		return this.currentLocate;
	}

	public setCurrentLocate(locate: LocationsInterface.TDialog) {
		this.currentLocate = locate;
	}
}

export default new HeroStore();
