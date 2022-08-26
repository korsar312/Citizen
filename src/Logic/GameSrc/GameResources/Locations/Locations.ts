import { FarundModule } from "./Farund/Farund.module";
import { LocationsInterface } from "./Locations.interface";

export class Locations implements LocationsInterface.ILocation {
	FARUND: FarundModule;

	constructor() {
		this.FARUND = new FarundModule();
	}
}
