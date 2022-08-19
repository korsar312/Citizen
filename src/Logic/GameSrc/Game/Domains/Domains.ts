import { TimesModule } from "./Times/Times.module";
import { Locations } from "./Locations/Locations";

export class Domains {
	public locations: Locations;
	public times: TimesModule;

	constructor() {
		this.times = new TimesModule();
		this.locations = new Locations();
	}
}

export default new Domains();
