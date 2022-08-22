import { FarundModule } from "./Farund/Farund.module";

export class Locations {
	public farund: FarundModule;

	constructor() {
		this.farund = new FarundModule();
	}
}
