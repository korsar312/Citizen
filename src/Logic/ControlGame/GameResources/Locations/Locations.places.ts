import { FarundModule } from "./Farund/Farund.module";
import { LocationsInterface } from "./Locations.interface";

export class LocationsPlaces implements LocationsInterface.ILocation {
	FARUND: FarundModule;

	constructor() {
		this.FARUND = new FarundModule();
	}
}
